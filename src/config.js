import { config } from 'dotenv';
config()

export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const TOKEN_EXPIRATION_TIME = process.env.TOKEN_EXPIRATION_TIME;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
export const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
export const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
export const AWS_LINK_ARCHIVE = process.env.AWS_LINK_ARCHIVE;

// module.exports = {

// AWS_LINK_ARCHIVE,

// AWS_BUCKET_NAME,
// AWS_BUCKET_REGION,
// AWS_PUBLIC_KEY,
// AWS_SECRET_KEY,

// TOKEN_EXPIRATION_TIME,
// TOKEN_SECRET,

export const db = {
    user: process.env.DB_USER,
    passsword: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
}
// }