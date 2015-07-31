'use strict';

angular.module('ng-gulp-hapi')
  .config(function ($stateProvider, appResolverProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        resolve: appResolverProvider.main,
        views: {
          '': {
            templateUrl: 'views/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          },
          'navbar': {
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            resolve: appResolverProvider.navbar
          }
        }
      });
  });
