const express = require('express');
const router = express.Router();
const session = require('express-session');

// Add your routes here - above the module.exports line

router.post('/v1/priority', function (req, res) {

    let urgencyType = req.session.data['fault-priority'];

    if (urgencyType === 'high') {
        res.redirect('/frontend/v1/highurgency');

    } else {
        res.redirect('/frontend/v1/lowurgency');
    }
});

// second routes
router.post('/v2/priority', function (req, res) {

    let urgencyType = req.session.data['fault-priority'];

    if (urgencyType === 'high') {
        res.redirect('/frontend/v2/highurgency');

    } else {
        res.redirect('/frontend/v2/lowurgency');
    }
});

module.exports = router;