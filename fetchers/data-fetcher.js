var dbFetcher = require("./db-fetcher");
var esFetcher = require("./es-fetcher");
var gbContentFetcher = require("./gb-content-fetcher");
var mongoFetcher = require("./mongo-fetcher");
var pdServiceFetcher = require("./product-details-fetcher");

function getData(source, productId, callback) {
    var fetcher;
    switch (source){
        case "DB":
            fetcher = dbFetcher;
            break;
        case "Elastic":
            fetcher = esFetcher;
            break;
        case "Greenbox":
            fetcher = gbContentFetcher;
            break;
        case "Mongo":
            fetcher = mongoFetcher;
            break;
        case "PDService":
            fetcher = pdServiceFetcher;
            break;
        default:
            throw "Unsupported fetching source";
    }
    fetcher.fetch(productId, returnData);

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

