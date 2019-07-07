const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
