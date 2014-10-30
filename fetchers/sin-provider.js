/**
 * Created by udi on 10/30/2014.
 */
var dbFetcher =  require('./db-fetcher');

function provide(productId, callback) {
    dbFetcher.fetchBOs(productId, function(bos){
        var bosWithSin = bos.filter(function (item) {
            return item != null && item["SIN"] != null;
        });
        var first = bosWithSin[0];
        callback(first ? first["SIN"] : null);
    });
};

exports.provide = provide;