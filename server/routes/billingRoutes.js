const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post("/api/stripe", (req, res) => {
        stripe.charges.create({
            amount: 500,
            currenct: 'usd',
            description: 'add credit',
            source: req.body.id
        });
    });
}