const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy ;
const app = express();

passport.use(new googleStrategy());

app.get("/", (req, res) => {
    res.send({message: "Hello World updated"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Server Started");
});
