'use strict';

angular.module('ng-gulp-hapi', [
  'app.directives',
  'app.filters',
  'app.resources',
  'app.services',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router',
  'ui.lodash',
  'gettext',
  'anim-in-out'
])
  .config(function ($provide, $stateProvider, $urlRouterProvider, $httpProvider, $animateProvider) {
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('httpInterceptor');

    $httpProvider.defaults.headers.post  = {'Content-Type': 'application/x-www-form-urlencoded'};

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
    $rootScope.loading = true;
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
      if (toState.name === 'main'){
        $rootScope.loading = false;
      }
      //restore all query string parameters back to $search.search
      //$location.search(locationSearch || {});
      $rootScope.stateClass = toState.name;
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      // throw the error so we know what happened when trying to resolve properties and enter a state
      throw error;

    });

  });


var foo = {
  gridColums: function () {
    // body...
    return [
      {id: 'title', name: 'Title', field: 'title', width: 120}
      , {id: 'duration', name: 'Duration', field: 'duration'}
      , {id: '%', name: '% Complete', field: 'percentComplete', width: 80, resizable: false}
      , {id: 'start', name: 'Start', field: 'start', width: 100}
      , {id: 'finish', name: 'Finish', field: 'finish', width: 100}
      , {
        id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', width: 80, minWidth: 20,
        maxWidth: 80, cssClass: 'cell-effort-driven'
      }
      , {id: 'c7', name: 'Description', field: 'c7', width: 200}
      , {id: 'c8', name: 'C8', field: 'c8', width: 120}
      , {id: 'c9', name: 'C9', field: 'c9', width: 120}
      , {id: 'c10', name: 'C10', field: 'c10', width: 120}
      , {id: 'c11', name: 'C11', field: 'c11', width: 120}
      , {id: 'c12', name: 'C12', field: 'c12', width: 120}
      , {id: 'c13', name: 'C13', field: 'c13', width: 120}
      , {id: 'c14', name: 'C14', field: 'c14', width: 120}
      , {id: 'c15', name: 'C15', field: 'c15', width: 120}
      , {id: 'c16', name: 'C16', field: 'c16', width: 120}
      , {id: 'c17', name: 'C17', field: 'c17', width: 120}
    ];
  },
  gridOptions: function () {
    // bo,dy...
    return {
      editable: true
      , asyncEditorLoading: false
      , enableAddRow: true
      , enableCellNavigation: true
      , enableColumnReorder: true
    };
  },
  gridData: function () {
    //to get real data
    var
      gridData = [];
    for (var i = 100; i > 0;) {
      i = i - 1;
      gridData[i] = {
        title: 'Task ' + i
        , duration: '5 days'
        , percentComplete: Math.round(Math.random() * 100)
        , start: '01/01/2009'
        , finish: '01/05/2009'
        , effortDriven: (i % 5 === 0)
        , c7: 'C7-' + i
        , c8: 'C8-' + i
        , c9: 'C9-' + i
        , c10: 'C10-' + i
        , c11: 'C11-' + i
        , c12: 'C12-' + i
        , c13: 'C13-' + i
        , c14: 'C14-' + i
        , c15: 'C15-' + i
        , c16: 'C16-' + i
        , c17: 'C17-' + i
      };
    }
    return gridData;

  }
};
