/**
 * Created by udi on 10/29/2014.
 */
var config = {};
config.elastic = {};
config.elastic.host = "cruxelastic1";
config.elastic.port = "9200";

config.db = {};
config.db.host = "cruxdb";
config.db.user = "reader";
config.db.pwd = "kozel";

module.exports = config;