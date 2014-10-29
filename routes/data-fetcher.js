var dbFetcher = require("../fetchers/db-fetcher");

function getData(source, productId, callback) {
    switch (source){
        case "db":
            dbFetcher.fetch(productId, returnData);
            break;
    }

    function returnData(data) {
        callback(data);
    }
}

exports.fetch = getData;

