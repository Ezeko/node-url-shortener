import dotenv from "dotenv";

dotenv.config();

PORT=8300
DB_URL='mongodb://shonubijerry:password@localhost:27017/trim'
DOMAIN_NAME='localhost:8300'
SECRET_KEY='my_secrete_key'
SAMPLE_COOKIE='4n-hnqI6iBIQo8-pyu2yW'
export const {
  PORT,
  DB_URL,
  DOMAIN_NAME,
  SECRET_KEY,
  SAMPLE_COOKIE
} = process.env;
