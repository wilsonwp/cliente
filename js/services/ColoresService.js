'use strict';
angular.module('app')
        .factory('ColoresResource',function($resource){
            return $resource("http://localhost:8000/muestraEquipoHincha/:email",{email:localStorage.getItem('email')});
            
});
