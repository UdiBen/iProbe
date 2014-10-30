/**
 * Created by udi on 10/29/2014.
 */
var config = {};
config.elastic = {};
config.elastic.host = "cruxelastic1:9200";

config.db = {};
config.db.host = "cruxdb";
config.db.user = "reader";
config.db.pwd = "kozel";

config.gb = {};
config.gb.host = "http://green.prod.global.s.com/gbox/gb/s/data/";

config.mongo = {};
config.mongo.host = "pegasusmongo1";
config.mongo.port = "27017";
config.mongo.user = "admin";
config.mongo.pwd = "MF123456";

config.pricingService = {};
config.pricingService.host = "http://pricing.shopyourway.com/priceservice/onlineprice/json";

config.productDetails = {};
config.productDetails.host = "http://10.235.44.56:8081/product-details-service/product-details-service/getProductDetails";

module.exports = config;