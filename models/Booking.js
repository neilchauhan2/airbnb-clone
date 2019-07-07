const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  customerName: {
    type: String,
    required: true
  },
  home: {
    location: String,
    name: String
  },
  host: {
    hostname: String,
    location: String,
    description: String
  },
  checkinDate: {
    type: Date
  },
  checkoutDate: {
    type: Date
  }
});

module.exports = Booking = mongoose.model("booking", BookingSchema);
