const express = require('express');
const router = express.Router();
const session = require('express-session');

// Add your routes here - above the module.exports line

router.post('/v2/closeconfirmation', function (req, res) {

    let resolveStatus = req.session.data['close-confirmation'];

    if (resolveStatus === 'yes') {
        res.redirect('/helpdesk/v2/closedupdate');

    } else {
        res.redirect('/helpdesk/v2/openupdate');
    }
});
module.exports = router;