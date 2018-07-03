const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const mainCtrl = require("./controllers/mainControl");

const port = 3004;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/coins", mainCtrl.getCoins);
app.post("/api/addFav", mainCtrl.addFav);
app.put("/api/updateName/:id", mainCtrl.updateName);
app.delete("/api/deleteName/:id", mainCtrl.deleteName);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
