var dbFetcher = require("./db-fetcher");
var esFetcher = require("./es-fetcher");
var gbContentFetcher = require("./gb-fetcher");
var mongoFetcher = require("./mongo-fetcher");
var pricingServiceFetcher = require("./pricing-service-fetcher");
var pdServiceFetcher = require("./product-details-fetcher");

function getData(source, productId, callback) {
    var fetcher;
    switch (source){
        case "DB":
            fetcher = dbFetcher.fetch;
            break;
        case "Elastic":
            fetcher = esFetcher.fetch;
            break;
        case "GB Content":
            fetcher = gbContentFetcher.fetchContent;
            break;
        case "GB Offers":
            fetcher = gbContentFetcher.fetchOffers;
            break;
        case "Mongo":
            fetcher = mongoFetcher.fetch;
            break;
        case "PDService":
            fetcher = pdServiceFetcher.fetch;
            break;
        case "PricingService":
            fetcher = pricingServiceFetcher.fetch;
            break;
        default:
            throw "Unsupported fetching source";
    }
    fetcher(productId, returnData);

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

