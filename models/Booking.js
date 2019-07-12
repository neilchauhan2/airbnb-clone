const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BookingSchema = new Schema({
  customerName: {
    type: String,
    required: true
  },
  customerId: ObjectId,
  hostId: ObjectId,
  home: {
    location: String,
    name: String
  },
  host: {
    hostname: String,
    location: String
  },
  checkinDate: {
    type: Date
  },
  checkoutDate: {
    type: Date
  }
});

module.exports = Booking = mongoose.model("booking", BookingSchema);
