/**
 * Created by kim on 10/29/2014.
 */

var mysql =  require('mysql');

function fetch(productId, callback){
    var connection =  mysql.createConnection({
            host : "localhost",
            user : "root",
            password: "MF12345"
    });

    connection.connect();
    connection.query("use products");
    var query = "select * from products where productId="+productId;

    connection.query(query, function(err, rows){
        var row = rows[0];
        var properties = [];
        for(var key in row){
             properties.push({"name": key, "value": row[key]});
        }
        callback(properties);
    });
}

exports.fetch = fetch;