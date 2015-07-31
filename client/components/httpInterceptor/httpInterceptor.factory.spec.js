// 'use strict';

// describe('Component: http interceptor', function() {

//   beforeEach(module('ng-gulp-hapi'));

//   var mockHttpInterceptor,
//       mockMetaData,
//       i18nService,
//       toaster;

//   beforeEach(inject(function($injector) {
//     mockHttpInterceptor = $injector.get('httpInterceptor');
//     mockMetaData = $injector.get('metaData');
//     i18nService = $injector.get('gettextCatalog');
//     toaster = $injector.get('toaster');
//   }));

//   describe('Response funtion', function() {

//     it('should use startupData for valid response and reformat keys', function() {
//       var resp = {},
//           response,
//           savedLang,
//           savedStrings;

//       resp.data = {startupData : {i18nResources: {testKey: ''}}};
//       spyOn(mockMetaData.getInfo(), 'lang').and.returnValue('en-US');
//       spyOn(i18nService, 'setStrings').and.callFake(function(lang, strings) {
//         savedLang = lang;
//         savedStrings = strings;
//       });
//       response = mockHttpInterceptor.response(resp);

//       _.each(response.data.startupData.i18nResources, function (val, key) {
//         key = _.snakeCase(key);
//         expect(_.has(savedStrings, key)).toBe(true);
//       });
//     });

//     it('should use i18Resources when there is no startupData', function() {
//       var resp = {},
//           response,
//           savedLang,
//           savedStrings;

//       resp.data = {i18nResources: {testKey: ''}};
//       spyOn(mockMetaData.getInfo(), 'lang').and.returnValue('en-US');
//       spyOn(i18nService, 'setStrings').and.callFake(function(lang, strings) {
//         savedLang = lang;
//         savedStrings = strings;
//       });
//       response = mockHttpInterceptor.response(resp);

//       _.each(response.data.i18nResources, function (val, key) {
//         key = _.snakeCase(key);
//         expect(_.has(savedStrings, key)).toBe(true);
//       });
//     });

//     it('should do nothing when there is no i18nResources provided', function() {
//       var resp = {},
//           savedLang,
//           savedStrings;

//       resp.data = {};
//       spyOn(mockMetaData.getInfo(), 'lang').and.returnValue('en-US');
//       spyOn(i18nService, 'setStrings').and.callFake(function(lang, strings) {
//         savedLang = lang;
//         savedStrings = strings;

//       });
//       mockHttpInterceptor.response(resp);

//       expect(savedLang).toBe(undefined);
//       expect(savedStrings).toBe(undefined);
//     });
//   });

//   describe('Response Error', function() {

//     it('should set the title when one is provided', function() {
//       var resp = {},
//         ttl;

//       resp.statusText = 'EVERYTHING IS BROKEN';
//       spyOn(toaster, 'pop').and.callFake(function(title) {
//         ttl = title;
//       });

//       mockHttpInterceptor.responseError(resp);
//       expect(ttl).toBe(resp.statusText);
//     });

//     it('should include the status in the title when one is provided', function() {
//       var resp = {},
//         msg;

//       resp.status = 500;
//       spyOn(toaster, 'pop').and.callFake(function(message) {
//         msg = message;

//       });

//       mockHttpInterceptor.responseError(resp);
//       expect(msg).toBe('Error (' + resp.status + ')');
//     })


//     it('should include the message in the message when one is provided', function() {
//       var resp = {},
//         msg;

//       resp.data = {message: 'Error'};
//       spyOn(toaster, 'pop').and.callFake(function(message) {
//         msg = message;

//       });

//       mockHttpInterceptor.responseError(resp);
//       expect(msg).toBe(resp.data.message);
//     });

//   });
// });
