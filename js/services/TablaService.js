'use strict';
angular.module('app')
        .factory('TablaResource',function($resource){
           return $resource('http://localhost:8000/tablas'); 
        });