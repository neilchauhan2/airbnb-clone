const route = require("express").Router();
const Booking = require("../models/Booking");

// Create a new booking
route.post("/add", async (req, res) => {
  try {
    const createdBooking = await new Booking({
      customerName: req.body.customerName,
      customerId: req.body.customerId,
      hostId: req.body.hostId,
      home: req.body.home,
      host: req.body.host,
      checkinDate: req.body.checkinDate,
      checkoutDate: req.body.checkoutDate
    });
    await createdBooking.save();
    res.send(createdBooking);
  } catch (error) {
    throw error;
  }
});

// get all bookings of a particular customer
route.get("/customer/:id", async (req, res) => {
  try {
    const bookings = await Booking.find({ customerId: req.params.id });
    res.send(bookings);
  } catch (error) {
    throw error;
  }
});
// get all bookings of a particular host
route.get("/host/:id", async (req, res) => {
  try {
    const bookings = await Booking.find({ hostId: req.params.id });
    res.send(bookings);
  } catch (error) {
    throw error;
  }
});

module.exports = route;
