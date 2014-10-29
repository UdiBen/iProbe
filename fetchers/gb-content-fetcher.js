/**
 * Created by udi on 10/29/2014.
 */
var dbFetcher =  require('./db-fetcher');
var config = require('./../config/config').gb
var request = require('request');

function fetch(productId, callback){
    dbFetcher.fetchBOs(productId, callGreenbox);

    function callGreenbox(bos) {
        // TODO: Be more clever...
        var bo = bos[0];
        if (bo === null || bo["SIN"] === null) {
            callback({});
            return;
        }

        var options = {
            url: config.host + "get/content/" + bo["SIN"],
            headers: {
                'Accept': 'application/json'
            }
        };
        request(options, function(error, response, body){
            var content = JSON.parse(body)[0]["_blob"]["content"];
            callback(content);
        });
    }
}

exports.fetch = fetch;