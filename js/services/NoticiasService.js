'use strict';
angular.module('app')
        .factory('NoticiaResource',function($resource){
           return $resource('http://localhost:8000/getNoticias'); 
        });

