(function() {
  'use strict';

  angular.module('myFilters', [])
    .filter('firstName', function () {
      return function (fullName) {
        return fullName.slice(0,fullName.indexOf(" "))
      }
    })
    .filter('ellipses', function () {
      return function (text, trimSize){
        var trimmed
        var ellipsesCharCode = '\u2026'

        trimmed = text.slice(0,trimSize) + ellipsesCharCode

        return trimmed
      }
    })
    .filter("lastName", function () {
      return function (fullName) {
        return fullName.slice(fullName.indexOf(" ")+1, fullName.length)
      }
    })


})();
