const express = require("express");
const axios = require("axios");
const router = express.Router();

const fetchSuiData = async (url) => {
  try {
    const transactionsResponse = await axios.post(url, {
      jsonrpc: "2.0",
      id: 1,
      method: "sui_getTotalTransactionBlocks",
    });

    const versionResponse = await axios.post(url, {
      jsonrpc: "2.0",
      id: 2,
      method: "rpc.discover",
    });

    return {
      transactions: transactionsResponse.data.result,
      version: versionResponse.data.result.info.version,
    };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching data");
  }
};

router.post("/", async (req, res) => {
  const { suiNetwork } = req.body;
  const url =
    suiNetwork === "testnet"
      ? "https://sui-rpc-pt2.testnet-pride.com:443"
      : "https://fullnode.devnet.sui.io:443";

  try {
    const data = await fetchSuiData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
