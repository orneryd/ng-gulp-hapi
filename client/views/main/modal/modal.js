'use strict';

angular.module('ng-gulp-hapi')
  .config(function($stateProvider) {
    $stateProvider
      .state('modal', {
        parent: 'main',
        url: 'modal',
        // routeList comes from the parent, main.
        onEnter: function($modal, routeList){
          this.$modalInstance = $modal.open({
            templateUrl: 'views/main/modal/modal.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal',
            backdrop: 'static',
            resolve: {
              routeList: function(){
                return routeList;
              }
            }
          });
        },
        onExit: function(){
          this.$modalInstance.close();
        }
      });
  });
