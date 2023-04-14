const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
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

    res.json({
      transactions: transactionsResponse.data.result,
      version: versionResponse.data.result.info.version,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

module.exports = router;
