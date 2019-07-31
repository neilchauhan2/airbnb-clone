const route = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");
const auth = require("../middleware/auth");

// create new user
route.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation
    if (!name || !email || !password) {
      return res.status(400).send("Please enter all credentials!");
    }
    // check for existing user
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).send("User already exists!");
    }

    // hashing the password
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    const createdUser = await new User({
      name,
      email,
      password: hash
    });

    const newUser = await createdUser.save();
    jwt.sign({ id: newUser.id }, config.get("jwtSecret"), (err, token) => {
      if (err) throw err;
      res.send({
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          is_host: false
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
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User does not exist!");
    }

    // compare password
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      jwt.sign({ id: user.id }, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.send({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email
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
    const user = await User.findById(req.user.id).select("-password");
    res.send(user);
  } catch (error) {
    throw error;
  }
});

// Become Host
route.post("/host/getstarted", async (req, res) => {
  try {
    const { id, host_location, host_description } = req.body;

    const user = await User.updateOne(
      { id },
      { host_location, host_description, is_host: true }
    );

    await res.send(user);
  } catch (error) {
    throw error;
  }
});

module.exports = route;
