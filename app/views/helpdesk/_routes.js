const express = require('express');
const router = express.Router();
const session = require('express-session');

// Add your routes here - above the module.exports line

//v2
router.post('/v2/closeconfirmation', function (req, res) {

    let resolveStatus = req.session.data['close-confirmation'];

    if (resolveStatus === 'yes') {
        res.redirect('/helpdesk/v2/closedupdate');

    } else {
        res.redirect('/helpdesk/v2/openupdate');
    }
});

//v3
router.post('/v3/closeconfirmation', function (req, res) {

    let resolveStatus = req.session.data['close-confirmation'];

    if (resolveStatus === 'yes') {
        res.redirect('/helpdesk/v3/closedupdate');

    } else {
        res.redirect('/helpdesk/v3/openupdate');
    }
});

//v4
router.post('/v4/closeconfirmation', function (req, res) {

    let resolveStatus = req.session.data['close-confirmation'];

    if (resolveStatus === 'yes') {
        res.redirect('/helpdesk/v4/closeconfirmed');

    } else {
        res.redirect('/helpdesk/v4/openupdate');
    }
});

//Do not edit below this line
module.exports = router;