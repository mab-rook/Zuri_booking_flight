const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute")

const app = express();

app.use(json());


app.use("/routes", routes);

app.get('/', (req, res) => {
  res.send('welcome to Zuri booking flight task ')
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
