const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy ;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => done(null, user));
});

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
}, async (accessToken,refreshToken,profile,done) => {
    const existingUser = await User.findOne({ googleId: profile.id})
        if(existingUser){
            return done(null, existingUser); //first argument is the error one. If there is an error we need to pass it, since we dont have any error here we pass null
        } 
            const user = await new User({ googleId: profile.id}).save()
            done(null,user);
})
);

