/**
 * Created by udi on 10/29/2014.
 */
var config = {};
config.elastic = {};
config.elastic.host = "databoxelastic1:9200";

config.db = {};
config.db.host = "proddb1";
config.db.user = "reader";
config.db.pwd = "kozel";

config.gb = {};
config.gb.host = "http://green.prod.global.s.com/gbox/gb/s/data/";

config.mongo = {};
config.mongo.host = "prodmongos1";
config.mongo.port = "27017";
config.mongo.user = "reader";
config.mongo.pwd = "kozel";

config.pricingService = {};
config.pricingService.host = "http://pricing.shopyourway.com/priceservice/onlineprice/json";

config.productDetails = {};
config.productDetails.host = "http://10.235.45.133:8081/product-details-service/product-details-service/getProductDetails";

module.exports = config;