/*	AngularJS string.Format filter
 *
 *	This filter provides string variable replacement similar to C# string.Format("{0}", "something");
 *
 *	Usage: {{ "From model: {0}; and a constant: {1};" | format:model.property:"constant":...:... }}
 */
'use strict';

angular.module('app.filters').filter('format', function() {
    return function(input) {
      var args = arguments;
      return input.replace(/\{(\d+)\}/g, function(match, capture) {
        return args[1 * capture + 1];
      });
    };
  });

