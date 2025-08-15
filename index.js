const serverless = require("serverless-http");
const app = require("./src/app");

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000; // match your frontend
  app.listen(PORT, () => {
    console.log(`Server is running locally on http://localhost:${PORT}`);
  });
}

module.exports = app;
module.exports.handler = serverless(app);


