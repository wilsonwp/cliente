'use strict';
angular.module('app')
        .factory('ProfileResource',function($resource){
            return $resource("http://localhost:8000/hinchas/show/:email",{email:localStorage.getItem('email')});
            
});
