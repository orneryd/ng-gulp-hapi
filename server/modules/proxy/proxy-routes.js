'use strict';

/**
 * All the endpoints for anything related to vehicle
 *
 * @type {exports}
 */

var startupController = require('./proxy-ctrl');
var config = require('../../config/environment');


module.exports = [
  {
    method: 'POST',
    path: '/api/data/{param*}',
    handler: {
      proxy: {
      		host:config.LBS.ip,
      		port:9012,
      		protocol: 'http',
      		passThrough: true,
			localStatePassThrough: true,
			xforward: true
      }
    }
  }
];
