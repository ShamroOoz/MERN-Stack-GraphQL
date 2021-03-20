import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      validate: [
        async (username) => !(await User.exists({ username })),
        "Username is already taken.",
      ],
    },
    name: {
      type: String,
      required: true,
      validate: [
        async (name) => !(await User.exists({ name })),
        "Name is already taken.",
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [
        async (email) => !(await User.exists({ email })),
        "Email is already taken.",
      ],
    },
    password: {
      type: String,
      required: true,
      default: null,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.matchesPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("Users", userSchema);
export default User;
