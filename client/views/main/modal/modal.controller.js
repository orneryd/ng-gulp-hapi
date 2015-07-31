'use strict';

angular.module('ng-gulp-hapi')
  .controller('ModalCtrl', function ($state, routeList) {
		this.routes = routeList;

    this.saveChanges = function(){
      // do some saving logic then transition to the parent state
      $state.go('^');
    };
  });
