/**
 * Created by udi on 10/29/2014.
 */
var sinProvider =  require('./sin-provider');
var config = require('./../config/config').gb
var request = require('request');

function fetch(productId, callback){
    sinProvider.provide(productId, function(sin){
        if (sin == null) {
            callback({});
            return;
        }

        var options = {
            url: config.host + "get/content/" + sin,
            headers: {
                'Accept': 'application/json'
            }
        };

        request(options, function(error, response, body){
            var content = JSON.parse(body)[0]["_blob"]["content"];
            callback(content);
        });
    });
}

exports.fetch = fetch;