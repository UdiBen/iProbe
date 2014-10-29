/**
 * Created by kim on 10/29/2014.
 */
var mysql =  require('mysql');
var config = require('./../config/config').db

function fetch(productId, callback){
    var connection = getConnection();

    connection.query("select * from products where productId=" + productId, function (err, rows) {
        connection.end();
        callback(rows[0]);
    });
}

function fetchBOs(productId, callback) {
    var connection = getConnection();

    connection.query("select * from products_buying_options where productid=" + productId, function (err, rows) {
        connection.end();
        callback(rows);
    });
}

function getConnection() {
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.pwd
    });
    connection.connect();
    connection.query("use products");
    return connection;
}
exports.fetch = fetch;
exports.fetchBOs = fetchBOs;