const route = require("express").Router();
const Home = require("../models/Home");

// Get all homes
route.get("/", async (req, res) => {
  const homes = await Home.find();
  res.send(homes);
});

// get all homes of a particular host
route.get("/host/:id", async (req, res) => {
  try {
    const homes = await Home.find({ hostId: req.params.id });
    res.send(homes);
  } catch (error) {
    throw error;
  }
});

// Create a new home
route.post("/add", async (req, res) => {
  try {
    const createdHome = await new Home({
      name: req.body.name,
      location: req.body.location,
      price: req.body.price,
      keyInfo: req.body.keyInfo,
      description: req.body.description,
      amenities: req.body.amenities,
      hostId: req.body.hostId,
      host: req.body.host,
      photos: req.body.photos
    });

    const newHome = await createdHome.save();
    res.send(newHome);
  } catch (error) {
    throw error;
  }
});

// Delete a home
route.get("/remove/:id", async (req, res) => {
  try {
    const home = await Home.findById(req.params.id);
    await home.remove();
    res.send("Home removed");
  } catch (error) {
    throw error;
  }
});

module.exports = route;
