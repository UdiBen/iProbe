var express = require('express');
var router = express.Router();
var fetcher = require('./../fetchers/data-fetcher');

/* GET product info. */
router.get('/', function(req, res) {
    fetcher.fetch(req.param("source"), req.param("productId"), sendResponse);

    function sendResponse(data) {
        res.send(data);
    }
});

module.exports = router;
