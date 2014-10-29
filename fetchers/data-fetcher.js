var dbFetcher = require("./db-fetcher");
var esFetcher = require("./es-fetcher");
var gbContentFetcher = require("./gb-content-fetcher");

function getData(source, productId, callback) {
    switch (source){
        case "DB":
            dbFetcher.fetch(productId, returnData);
            break;
        case "Elastic":
            esFetcher.fetch(productId, returnData);
            break;
        case "Greenbox":
            gbContentFetcher.fetch(productId, returnData);
            break;
    }

    function returnData(data) {
        var properties = [];
        for(var key in data){
            if (typeof (data[key]) === 'object')
                properties.push({"name": key, "value": JSON.stringify(data[key])});
            else
                properties.push({"name": key, "value": data[key]});
        }
        callback(properties);
    }
}

exports.fetch = getData;

