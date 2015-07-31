'use strict';

angular.module('app.resources')
  .factory('StartupData', function (_, $resource) {

    var url = '/api/data/GetRouteList';

    return $resource(
      url,
      {
        get: {
          method: 'POST',
          isArray: true,
          cache: true,
          // transformRequest: function(data,headersGetter){
            
          // },
          transformResponse: function (data) {
            var startupData = angular.fromJson(data);
            //TODO: modify key values on the backend or add new ones
            return startupData;
          }
        }
      });
  });
