const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();


app.use(cors({
  origin: 'https://codesence-ai.vercel.app', // your deployed frontend
  methods: ['GET','POST'],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a response from server");
});

app.use("/ai", aiRoutes);

module.exports = app;