const express = require("express");
const app = express();

const fs = require("fs");

app.get("/:time/:value", (req, res) => {
  console.log(req.params);

  const time = req.params["time"];
  const value = req.params["value"];

  const data = time + "," + value + "\n";

  fs.appendFileSync("./data.csv", data);
  res.send("data added: " + time + " = " + value);
});

app.get("/data", (req, res) => {
  const data = fs.readFileSync("data.csv");
  res.send(data);
});

const port = 8081;
app.listen(port, () => console.log("Example app listening on port 3000!"));
