const express = require("express");
const bodyParser = require("body-parser");

const week3 = express();


week3.use(bodyParser.json());


week3.use(bodyParser.urlencoded({ extended: true }));

week3.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
require("C:/Users/smits/Web Development/week3/routes/login.routes.js")(week3);
// set port, listen for requests
week3.listen(3030, () => {
  console.log("Server is running on port 3030.");
});