const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const HomeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  price: {
    type: String
  },
  keyInfo: [{ item: String }],
  description: {
    type: String
  },
  amenities: [{ item: String }],
  hostId: ObjectId,
  host: {
    hostname: String,
    location: String,
    description: String
  },
  photos: [{ url: String }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Home = mongoose.model("home", HomeSchema);
