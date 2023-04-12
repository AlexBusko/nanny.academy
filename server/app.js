const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the URL of your frontend app
  methods: ["GET", "POST"], // Allowed request methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

app.post("/api/data", async (req, res) => {
  const { ip, rpcPort } = req.body;

  try {
    const transactionsResponse = await axios.post(`http://${ip}:${rpcPort}`, {
      jsonrpc: "2.0",
      id: 1,
      method: "sui_getTotalTransactionBlocks",
    });

    const versionResponse = await axios.post(`http://${ip}:${rpcPort}`, {
      jsonrpc: "2.0",
      id: 2,
      method: "rpc.discover",
    });

    console.log(transactionsResponse);
    console.log(versionResponse);

    res.json({
      transactions: transactionsResponse.data.result,
      version: versionResponse.data.result.info.version,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
