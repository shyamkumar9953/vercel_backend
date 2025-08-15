const serverless = require("serverless-http");
const app = require("./src/app");  // correct path since app.js is in src/

// Only start server locally, ignored by Vercel
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running locally on http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
module.exports.handler = serverless(app);
