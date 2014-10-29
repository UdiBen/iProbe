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
        var doc = response._source;
        var properties = [];
        for(var key in doc){
            if (typeof (doc[key]) === 'object')
                properties.push({"name": key, "value": JSON.stringify(doc[key])});
            else
                properties.push({"name": key, "value": doc[key]});
        }
        callback(properties);
    })
}

exports.fetch = fetch;