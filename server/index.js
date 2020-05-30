const express = require('express');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/Users');
require('./models/Surveys');
require('./services/passport'); //make sure passport is below the users schema

const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge : 2592000000,
  keys : [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());



authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI)
  .then(() => {
    app.listen(PORT);
    console.log("Server Started");
  })
  .catch(err => {
    console.log(err);
  });