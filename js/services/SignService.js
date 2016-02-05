'use strict';
angular.module('app')
        .factory('SignResource',function($resource){
            return $resource("http://localhost:8000/hinchas/:id",{id:"@id"});
            
        });
