/**
 * Created by udi on 10/29/2014.
 */
var client = require('mongodb').MongoClient;
var config = require('./../config/config').mongo;
var url = "mongodb://"+config.user+":"+config.pwd +"@"+config.host +"/products?authSource=admin";

function fetch(productId, callback){
    client.connect(url, function(err, db) {
        if (err) throw err;

        db.collection('products').findOne({_id: productId}, function(err, doc){
            if (err) throw err;

            db.close();
            callback(doc);
        });
    });
}

exports.fetch = fetch;