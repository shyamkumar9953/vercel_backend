const serverless = require("serverless-http");
const app = require("./src/app");

if (process.env.VERCEL) {
  // Running on Vercel (serverless function)
  module.exports = serverless(app);
} else {
  // Running locally
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}
