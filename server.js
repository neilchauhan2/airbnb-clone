const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/homes", require("./routes/homes"));
app.use("/guests", require("./routes/users"));
// app.use("/hosts", require("./routes/hosts"));
app.use("/bookings", require("./routes/bookings"));

app.get("/", (req, res) => {
  res.send(`
    <h1> Airbnb Clone </h1>
    `);
});

// DB Config
const uri = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("database connected!"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
