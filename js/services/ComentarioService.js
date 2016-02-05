'use strict';
angular.module('app')
        .factory('ComentarioResource',function($resource,id){
            return $resource("http://localhost:8000/comentariosPartido/:partido",{partido:id});
            
});