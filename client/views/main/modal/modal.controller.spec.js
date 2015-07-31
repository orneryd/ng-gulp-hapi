'use strict';

describe('Controller: ModalCtrl', function () {

  // load the controller's module
  beforeEach(module('ng-gulp-hapi'));

  var ModalCtrl;
  var scope;
  //    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    //$httpBackend = _$httpBackend_;
    //$httpBackend.expectGET('/api/things')
    //  .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ModalCtrl = $controller('ModalCtrl', {
      $scope: scope,
      routeList: ['one', 'two']
    });
  }));

  it('should attach the route list to the scope', function () {
    expect(scope.routes.length).toBe(2);
  });
});