const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy ;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');


passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
}, (accessToken,refreshToken,profile,done) => {
    User.findOne({ googleId: profile.id})
    .then(existingUser => {
        if(existingUser){
            done(null, existingUser); //first argument is the error one. If there is an error we need to pass it, since we dont have any error here we pass null
        } else {
            new User({ googleId: profile.id}).save()
            .then(user => done(null,user));
        }
    })
})
);

