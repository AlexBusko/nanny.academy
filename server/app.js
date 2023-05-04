const express = require("express");
const cors = require("cors");
// const axios = require("axios");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT;

const corsOptions = require("./config/corsConfig");
const nodeDataRoute = require("./routes/sui/nodeData");
const suiDataRoute = require("./routes/sui/suiData");

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

app.use("/api/node/data", nodeDataRoute);
app.use("/api/sui/data", suiDataRoute);

if (port) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
