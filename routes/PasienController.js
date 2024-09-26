const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json("Pasien Controller");
});

module.exports = router;
