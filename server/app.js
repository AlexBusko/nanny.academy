const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3001;

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
