// load environment variables for dev mode
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    port: process.env.PORT,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoUri: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};