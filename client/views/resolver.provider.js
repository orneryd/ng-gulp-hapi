'use strict';

angular.module('ng-gulp-hapi')
  .provider('appResolver', function AppResolverProvider() {

    this.$get = ['appResolverService', function () {
      return new AppResolverProvider();
    }];

    this.main = {
        routeList:['$http',function($http){
          return $http({
                method: 'POST',
                url: '/api/data/GetRouteList',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ customerID: 1 })
            }).then(function(rsp){
                return rsp.data;
            });
        }]
    };

    this.navbar = {
      navItems: ['_', function () {

      }]
    };

  });
