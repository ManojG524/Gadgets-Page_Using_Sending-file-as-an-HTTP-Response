const express = require("express");
const app = express();

const as = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = as;
