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

// get all bookings of a particular host

module.exports = route;
