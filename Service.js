const express = require("express");
const app = express();
const port = 3000;

const PasienController = require("./routes/PasienController");
const InternalController = require("./routes/InternalController");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pendaftaran", (req, res) => {
  res.send("Pendaftaran Berhasil Mantab");
});

app.use("/pasien", PasienController);

app.use("/Internal", InternalController);

app.listen(port, () => {
  console.log(`Server Running on Port : ${port}`);
});
