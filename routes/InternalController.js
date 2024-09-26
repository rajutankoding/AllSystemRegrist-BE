const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Interal Controller");
});

module.exports = router;
