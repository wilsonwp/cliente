'use strict';
angular.module('app')
        .factory('CalendarioResource',function($resource){
           return $resource('http://localhost:8000/calendarios'); 
        });

