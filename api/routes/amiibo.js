var express = require('express');
var router = express.Router();
var amiibos = require('../data/amiibo.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.header('Cache-Control', 'no-store');

    res.status(200);

    res.json(amiibos)
});

module.exports = router;