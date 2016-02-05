'use strict';
angular.module('app')
        .factory('CategoriaNoticiaResource',function($resource){
           return $resource('http://localhost:8000/getCategoriaNoticias'); 
        });

