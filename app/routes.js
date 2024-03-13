// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line


router.use('/frontend', require('./views/frontend/_routes.js'))


router.use('/helpdesk', require('./views/helpdesk/_routes.js'))

module.exports = router;
