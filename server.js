const express = require("express");
const app = express();

const fs = require("fs");

app.get("/byron/:value", (req, res) => {
  console.log(req.params);

  const value = req.params["value"];

  const data =
    new Date().toLocaleString("en-us").replace(",", "") + "," + value + "\n";

  fs.appendFileSync("./data_byron.csv", data);
  res.send("data added: " + value);
});

app.get("/:time/:value", (req, res) => {
  console.log(req.params);

  const time = req.params["time"];
  const value = req.params["value"];

  const data =
    new Date().toLocaleString("en-us").replace(",", "") +
    "," +
    time +
    "," +
    value +
    "\n";

  fs.appendFileSync("./data.csv", data);
  res.send("data added: " + time + " = " + value);
});

app.get("/data", (req, res) => {
  const data = fs.readFileSync("data.csv");
  res.send(data);
});

app.get("/data_byron", (req, res) => {
  const data = fs.readFileSync("data_byron.csv");
  res.send(data);
});

app.get("/clear", (req, res) => {
  fs.writeFileSync("./data.csv", "");
  res.send("data cleared");
});

app.get("/clear_byron", (req, res) => {
  fs.writeFileSync("./data_byron.csv", "");
  res.send("data cleared");
});

const port = 8081;
app.listen(port, () => console.log("Example app listening on port 8081!"));
