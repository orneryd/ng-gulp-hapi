'use strict';

describe('Component: http interceptor', function () {

  beforeEach(module('ng-gulp-hapi'));

  var mockHttpInterceptor,
    i18nService;

  beforeEach(inject(function ($injector) {
    mockHttpInterceptor = $injector.get('httpInterceptor');
    i18nService = $injector.get('gettextCatalog');
  }));

  describe('Response funtion', function () {

    it('should add any i18n keys to the gettext catalog', function () {

    });
  });
});
