const { log } = require("./logger");
const { registerUser } = require("./register");
const { authenticate } = require("./auth");

module.exports = {
  Log: log,
  registerUser,
  authenticate
};

const cors = require('cors');
app.use(cors());
