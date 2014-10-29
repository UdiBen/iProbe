/**
 * Created by udi on 10/29/2014.
 */
var elasticsearch =  require('elasticsearch');
var config = require('./../config/config').elastic;

var client = elasticsearch.Client({
    host: config.host
});

function fetch(productId, callback){
    client.get({
        index: "products",
        type: "product",
        id: productId
    }, function(error, response){
        callback(response._source);
    })
}

exports.fetch = fetch;