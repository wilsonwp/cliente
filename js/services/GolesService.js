'use strict';
angular.module('app')
        .factory('GolesResource',function($resource){
            return $resource("http://localhost:8000/partidos/getMarcador/:partido:equipo",{partido:"@partido"});
            
        });
