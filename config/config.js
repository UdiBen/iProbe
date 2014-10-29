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

module.exports = config;