const express = require("express");
const cors = require("cors");
const { Connection, PublicKey, clusterApiUrl } = require("@solana/web3.js");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(cors());

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

app.get("/balance/:address", async (req, res) => {
  const { address } = req.params;
  try {
    const balance = await connection.getBalance(new PublicKey(address));
    res.json({ balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/solprice", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    );
    const data = await response.json();
    res.json(data.solana);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend proxy running on http://localhost:${port}`);
});
