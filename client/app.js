'use strict';

angular.module('ng-gulp-hapi', [
  'app.directives',
  'app.filters',
  'app.resources',
  'app.services',
  'ngSanitize',
  'ui.router',
  'ui.lodash',
  'gettext',
  'anim-in-out',
  'mm.foundation'
])
  .config(function ($provide, $stateProvider, $urlRouterProvider, $httpProvider, $animateProvider) {
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('httpInterceptor');

    $animateProvider.classNameFilter(/anim-/);

    $stateProvider.decorator('views', function (state, parent) {
      var result = {}, views = parent(state);
      angular.forEach(views, function (config, name) {
        result[name] = config;
      });

      state.getViewConfig = function (config) {
        var ret;
        var currentState = state;
        var split = config.split('.');
        if (split.length === 1) {
          ret = currentState.self[config];
        } else {
          angular.forEach(currentState.self.views, function (val, key) {
            if (!ret && split[0] === key) {
              ret = val[split[1]];
            }
          });
        }
        return ret;
      };
      return result;
    });
  })
  .run(function (_, $rootScope, $state, gettextCatalog) {

    $rootScope.$state = $state;

    $rootScope.stateClass = $state.current.name;

    gettextCatalog.setCurrentLanguage('en-us');

    $rootScope.$on('$stateChangeStart', function (/*event, toState*/) {

      //save location.search so we can add it back after transition is
      //var search = $location.search();
      //
      //if (!_.isEmpty(search)) {
      //  vehicleConfig.set(search);
      //}
      //
      //locationSearch = vehicleConfig.get();
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      //restore all query string parameters back to $search.search
      //$location.search(locationSearch || {});
      $rootScope.stateClass = toState.name;
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      // throw the error so we know what happened when trying to resolve properties and enter a state
      throw error;

    });

  });
