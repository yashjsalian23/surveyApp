const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport'); //make sure passport is below the users schema

const app = express();


app.get("/", (req, res) => {
    res.send({message: "Hello World updated"});
});

authRoutes(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI)
  .then(() => {
    app.listen(PORT);
    console.log("Server Started");
  })
  .catch(err => {
    console.log(err);
  });