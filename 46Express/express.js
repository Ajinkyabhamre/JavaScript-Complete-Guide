const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/contact", (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname, './index.html'))
  //res.send("contact me now");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
