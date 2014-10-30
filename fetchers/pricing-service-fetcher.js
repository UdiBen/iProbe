/**
 * Created by udi on 10/29/2014.
 */
var sinProvider = require('./sin-provider');
var request = require('request');
var config = require('./../config/config').pricingService;

function fetch(productId, callback) {
    sinProvider.provide(productId, function (sin) {
        if (sin == null) {
            callback({});
            return;
        }

        request.post({
            url: config.host,
            body: buildBody(sin)
        }, function (error, response, body) {
            if (error || response != 200) throw error;
        });
    });

    function buildBody(sin) {
        return JSON.stringify(
            {"price-request": {
                "price-identifier":[{
                    "rgn": "0",
                    "pid": {
                        "$": sin,
                        "@variation": "0"
                    }
                }]
            }})
    }
}

exports.fetch = fetch;