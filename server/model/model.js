const mongoose = require('mongoose');

//mongoose schema allows to create shape and content
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: string,
});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
