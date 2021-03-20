import Joi from "joi";

const username = Joi.string()
  .alphanum()
  .trim()
  .min(4)
  .max(30)
  .required()
  .label("UserName");
const name = Joi.string().alphanum().trim().max(300).required().label("Name");
const password = Joi.string()
  .regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/)
  .min(8)
  .max(50)
  .message(
    "must have at least one lowercase letter, one uppercase letter, and one digit."
  )
  .required()
  .label("password");
const email = Joi.string().email().trim().required().label("Email");
const repeat_password = Joi.string()
  .valid(Joi.ref("password"))
  .required()
  .label("Repeat Password");

export const SingupSchema = Joi.object().keys({
  email,
  username,
  name,
  password,
  repeat_password,
});

export const SignInSchema = Joi.object().keys({
  email,
  password,
});
