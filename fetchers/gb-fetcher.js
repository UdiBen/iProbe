/**
 * Created by udi on 10/29/2014.
 */
var sinProvider =  require('./sin-provider');
var dbFetcher =  require('./db-fetcher');
var config = require('./../config/config').gb
var request = require('request');
var array = require("array-extended");

function fetchOffers(productId, callback){
    dbFetcher.fetchBOs(productId, function(bos){
        var xids = array.unique(bos.map(function(item){
            return item["ExternalID"].toUpperCase();
        }).filter(function(item){
            return item != null;
        }));

        var options = {
            url: config.host + "get/offer/" + xids.join("/"),
            headers: {
                'Accept': 'application/json'
            }
        };

        request(options, function(error, response, body){
            var content = JSON.parse(body);
            callback(content);
        });
    });
}

function fetchContent(productId, callback){
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

exports.fetchContent = fetchContent;
exports.fetchOffers = fetchOffers;