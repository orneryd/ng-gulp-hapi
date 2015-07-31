'use strict';

angular.module('ng-gulp-hapi')
  .controller('MainCtrl', function ($scope, routeList) {
  		$scope.routes = routeList;
  });
