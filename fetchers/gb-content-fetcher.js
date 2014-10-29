/**
 * Created by udi on 10/29/2014.
 */
var dbFetcher =  require('./db-fetcher');
var config = require('./../config/config').gb

function fetch(productId, callback){
    dbFetcher.fetchBOs(productId, callGreenbox);

    function callGreenbox(bos) {
        // TODO: Be more clever...
        var bo = bos[0];
        if (bo === null || bo["SIN"] === null) {
            callback({});
            return;
        }

        $.get(config.host + "get/content/" + bo["SIN"], function(response){
            console.log(response);
        });
    }
}

exports.fetch = fetch;