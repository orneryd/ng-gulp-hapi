/*	AngularJS string.Format filter
 *
 *	This filter provides string variable replacement similar to C# string.Format("{0}", "something");
 *
 *	Usage: {{ "From model: {0}; and a constant: {1};" | format:model.property:"constant":...:... }}
 */
'use strict';

angular.module('app.filters').filter('split', function() {
    return function(input) {
      var args = arguments;
      var regexp = new RegExp(args[1]);
      var indx = args[2];
      if (args[2] !== undefined){
        return input.split(regexp)[indx];
      } else {
        return input.split(regexp);
      }
    };
  });

