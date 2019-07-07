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

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
