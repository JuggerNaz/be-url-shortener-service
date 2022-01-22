'use strict';
var url = require("./ops/url");

module.exports.createUrl = (event, context, callback) => {
  url.create(event, context, callback )
}

module.exports.getUrl = (event, context, callback) => {
  url.get(event, context, callback)
}
