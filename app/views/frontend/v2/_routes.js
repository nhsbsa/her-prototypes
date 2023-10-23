const express = require('express');
const router = express.Router();
const session = require('express-session');

// Add your routes here - above the module.exports line

router.post('/urgency', function (req, res) {

    let urgencyType = req.session.data['urgencyType'];

    if (urgencyType === 'high') {
        res.redirect('/frontend/high-urgency');

    } else {
        res.redirect('/frontend/medium-urgency');
    }
});

module.exports = router;