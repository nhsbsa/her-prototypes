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
router.post('/v2a/priority', function (req, res) {

    let urgencyType = req.session.data['fault-priority'];

    if (urgencyType === 'high') {
        res.redirect('/frontend/v2a/highurgency');

    } else {
        res.redirect('/frontend/v2a/lowurgency');
    }
});

//v3 routes
router.post('/v3/priority', function (req, res) {

    let urgencyType = req.session.data['fault-priority'];

    if (urgencyType === 'high') {
        res.redirect('/frontend/v3/highurgency');

    } else {
        res.redirect('/frontend/v3/lowurgency');
    }
});


//v4 routes
router.post('/v4/priority', function (req, res) {

    let urgencyType = req.session.data['fault-priority'];

    if (urgencyType === 'high') {
        res.redirect('/frontend/v4/highurgency');

    } else {
        res.redirect('/frontend/v4/lowurgency');
    }
});
module.exports = router;