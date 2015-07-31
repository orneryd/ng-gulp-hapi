'use strict';

angular.module('ng-gulp-hapi')
  .config(function($stateProvider,appResolverProvider) {
    $stateProvider
      .state('modal', {
        parent: 'main',
        url: 'modal',
        onEnter: function($modal){
          this.$modalInstance = $modal.open({
            templateUrl: 'views/main/modal/modal.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal',
            resolve: appResolverProvider.main
          });
        },
        onExit: function(){
          this.$modalInstance.dismiss();
        }
      });
  });
