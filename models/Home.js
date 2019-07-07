const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  keyInfo: [{ item: String }],
  description: {
    type: String
  },
  amenities: [{ item: String }],
  host: {
    hostname: String,
    location: String,
    description: String
  }
});

module.exports = Home = mongoose.model("home", HomeSchema);
