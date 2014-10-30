/**
 * Created by udi on 10/29/2014.
 */
var dbFetcher = require('./db-fetcher');
var request = require('request');
var config = require('./../config/config').pricingService;
var array = require("array-extended");

function fetch(productId, callback) {
    dbFetcher.fetchBOs(productId, function (bos) {
        var xids = array.unique(bos.map(function (item) {
            return item["ExternalID"].toUpperCase();
        }).filter(function (item) {
            return item != null;
        }));

        var body = buildBody(xids);
        request.post({
            url: config.host,
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }, function (error, response, body) {
            if (error) throw error;
            var parsed = parseResponse(JSON.parse(body));
            callback(parsed);
        });
    });
}

function buildBody(xids) {
    var requests = xids.map(function (xid) {
        return {
            "rgn": "0",
            "pid": {
                "$": xid,
                "@variation": "0"
            }
        }
    });

    return {"price-request": { "price-identifier": requests}};
}

function parseResponse(response) {
    var results = response["price-response"]["item-response"];
    return results.map(function(item){
        return {
            "status-code": item["status-code"],
            "regular-price": item["regular-price"],
            "sale-price": item["sell-price"]["$"],
            "ndd-price": item["ndd-price"],
            "craftsman-price": item["craftsman-price"]
        }
    });
}

exports.fetch = fetch;