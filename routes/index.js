var express = require('express');
const { getUptime } = require('../helpers/system');
var router = express.Router();

/* GET Index page. */
router.get('/', async (req, res) => {
    res.render('index')
})

module.exports = router;