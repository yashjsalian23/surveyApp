const Survey = require('../models/Surveys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredit');


module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients:  recipients.split(',').map(email => ({ email: email.trim() })), 
            _user: req.user.id,
            dateSent: Date.now()
        })
    });
}
