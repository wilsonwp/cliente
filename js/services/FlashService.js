'use strict';
angular.module('app').factory('FlashResource', function($rootScope) {
  var queue = [], currentMessage = '';
  
  $rootScope.$on('$routeChangeSuccess', function() {
    if (queue.length > 0) 
      currentMessage = queue.shift();
    else
      currentMessage = '';
  });
  
  return {
    set: function(message) {
      queue.push(message);
    },
    get: function(message) {
      return currentMessage;
    }
  };
});