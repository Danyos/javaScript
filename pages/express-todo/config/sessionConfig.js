import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

export const sessionConfig = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 }, // 1 ժամ
});
