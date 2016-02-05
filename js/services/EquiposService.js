'use strict';
angular.module('app')
        .factory('EquiposResource',function($resource){
           return $resource('http://localhost:8000/equipos_list/'); 
        });

