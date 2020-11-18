module.exports = week3 => {
  const customers = require("../controllers/login.controllers");
  week3.post("/customers", customers.create);
};