const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.get("/data", (req, res) => {
  const fileName = `./public/anjin_used.json`;
  const filePath = path.join(__dirname, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '');
  res.json(JSON.parse(fileContent)); // Send JSON data
});

app.listen(port, () => {
  console.log(`应用正在监听${port}端口 !`);
  console.log(`http://localhost:${port}`);
});