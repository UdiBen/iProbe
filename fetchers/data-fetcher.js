var dbFetcher = require("./db-fetcher");
var esFetcher = require("./es-fetcher");

function getData(source, productId, callback) {
    switch (source){
        case "db":
            dbFetcher.fetch(productId, returnData);
            break;
        case "es":
            esFetcher.fetch(productId, returnData);
    }

    function returnData(data) {
        callback(data);
    }
}

exports.fetch = getData;

