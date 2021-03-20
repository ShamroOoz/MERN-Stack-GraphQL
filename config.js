require("dotenv").config();

const ONE_DAY = 1000 * 60 * 60 * 24;

export const {
  PORT = 4000,
  NODE_ENV = "development",

  DB_URL = "Put the atlas url in env file",

  SESS_NAME = "sid",
  SESS_SECRET = "ssh!secret!",
  SESS_LIFETIME = ONE_DAY,

  REDIS_HOST = "localhost",
  REDIS_PORT = 6379,
  REDIS_PASSWORD = "secret",
} = process.env;

export const IN_PROD = NODE_ENV === "production";

export const DB_URI = DB_URL;

export const DB_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export const APOLLO_OPTIONS = {
  playground: IN_PROD
    ? false
    : {
        settings: {
          "request.credentials": "include",
        },
      },
};

export const REDIS_OPTIONS = {
  host: REDIS_HOST,
  port: +REDIS_PORT,
  password: REDIS_PASSWORD,
};

export const SESS_OPTIONS = {
  name: SESS_NAME,
  secret: SESS_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: +SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD,
  },
};

export const JOI_OPTION = {
  abortEarly: false, // abort after the last validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: true, // remove unknown keys from the validated data
};
