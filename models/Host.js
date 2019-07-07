const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Host = mongoose.model("host", HostSchema);
