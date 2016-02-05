'use strict';
angular.module('app')
        .factory('PartidosResource',function($resource){
           return $resource('http://localhost:8000/partidos_live/'); 
        });

