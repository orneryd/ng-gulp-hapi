'use strict';

angular.module('ng-gulp-hapi')
  .config(function($stateProvider) {
    $stateProvider
      .state('modal', {
        parent: 'main',
        url: 'modal',
        onEnter: function($modal){
          this.$modalInstance = $modal.open({
            templateUrl: 'views/main/modal/modal.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal'
          });
        },
        onExit: function(){
          this.$modalInstance.dismiss();
        }
      });
  });
