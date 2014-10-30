/**
 * Created by udi on 10/29/2014.
 */
var sinProvider = require('./sin-provider');
var request = require('request');
var config = require('./../config/config').productDetails;

function fetch(productId, callback) {
    sinProvider.provide(productId, function (sin) {
        if (sin == null) {
            callback({});
            return;
        }

        var url = config.host + '?request=' + JSON.stringify([sin, "sears"]);
        request(url, function (error, response) {
            callback(JSON.parse(response.body)["product"]);
        });
    });
}

exports.fetch = fetch;