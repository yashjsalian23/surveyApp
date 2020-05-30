const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredit');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

    });
}
