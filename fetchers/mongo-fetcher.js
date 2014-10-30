/**
 * Created by udi on 10/29/2014.
 */
var Server = require('mongodb').Server;
var Db = require('mongodb').Db;
var client = require('mongodb').MongoClient;

var config = require('./../config/config').mongo;

function fetch(productId, callback){
//    var url = 'mongodb://' + config.user + ":" + config.pwd + "@" + config.host + ":" + config.port + '/products';
    var url = 'mongodb://' + config.host + ":" + config.port + '/products';

//    var client = new Db("products", new Server("pegasusmongo1", "27017"));
//    client.open(function(err, client) {
//        if (err) { throw err; }
//        client.authenticate("admin", "MF123456", function(err, result) {
//            client.collection('users', update);
//        });
//    });


//mongodb://username:password@localhost:27017/exampledatabase
//    var a = "mongodb://pegasusmongo1:27017/products";
    var a = "mongodb://admin:MF123456@pegasusmongo1:27017/admin";
    client.connect(a, function(err, db) {
        if (err) throw err;
//
//        db.grantRolesToUser("admin", { role: "readWrite", db: "products" }, function(a,b,c){
//            db.close();
//        });

        
        var collection = db.collection('products');

        collection.findOne({"_id": productId}, function(err, doc){
            db.close();
        });
    });
}

exports.fetch = fetch;