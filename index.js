 // index.js
const serverless = require("serverless-http");
const app = require("./src/app");

module.exports = app; // This allows local dev
module.exports.handler = serverless(app); // This is for Vercel
