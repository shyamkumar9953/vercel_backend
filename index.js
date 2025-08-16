
const serverless = require("serverless-http");
const app = require("./src/app");
 // path to your Express app

// Local testing
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running locally on http://localhost:${PORT}`));
}

module.exports = app;
module.exports.handler = serverless(app);