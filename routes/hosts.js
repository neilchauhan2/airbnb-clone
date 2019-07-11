const route = require("express").Router();
const Host = require("../models/Host");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");
const auth = require("../middleware/auth");

// create new user
route.post("/signup", async (req, res) => {
  try {
    const { name, email, password, location, description } = req.body;
    // validation
    if (!name || !email || !password || !location || !description) {
      return res.status(400).send("Please enter all credentials!");
    }
    // check for existing user
    const host = await Host.findOne({ email });

    if (host) {
      return res.status(400).send("User already exists!");
    }

    // hashing the password
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    const createdHost = await new Host({
      name,
      email,
      password: hash,
      location,
      description
    });

    await createdHost.save();
    jwt.sign({ id: createdHost.id }, config.get("jwtSecret"), (err, token) => {
      if (err) throw err;
      res.send({
        token,
        user: {
          id: createdHost.id,
          name: createdHost.name,
          email: createdHost.email,
          location: createdHost.location,
          description: createdHost.description
        }
      });
    });
  } catch (error) {
    throw error;
  }
});

// Login
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).send("Please enter all credentials!");
    }

    // check for existing user
    const host = await Host.findOne({ email });
    if (!host) {
      return res.status(400).send("User does not exist!");
    }

    // compare password
    const match = await bcrypt.compare(password, host.password);
    if (match) {
      jwt.sign({ id: host.id }, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.send({
          token,
          user: {
            id: host.id,
            name: host.name,
            email: host.email,
            location: host.location,
            description: host.description
          }
        });
      });
    } else {
      return res.status(400).send("Password incorrect!");
    }
  } catch (error) {
    throw error;
  }
});

// Get User
route.get("/user", auth, async (req, res) => {
  try {
    const host = await Host.findById(req.user.id).select("-password");
    res.send(host);
  } catch (error) {
    throw error;
  }
});

module.exports = route;
