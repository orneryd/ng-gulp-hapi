'use strict';

angular.module('ng-gulp-hapi')
  .provider('appResolver', function AppResolverProvider() {

    this.$get = ['appResolverService', function () {
      return new AppResolverProvider();
    }];

    this.main = {

    };

    this.navbar = {
      navItems: ['_', function () {

      }]
    };

  });
