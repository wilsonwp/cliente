'use strict';

/* Controllers */
  // signin controller
app.controller('LogoutCtrl', ['$scope','$location','$state', function($scope,$location,$state) {
        localStorage.removeItem("email");
          localStorage.removeItem("nombre");
        localStorage.removeItem("fecha_nacimiento");
        localStorage.removeItem("telefono");
        localStorage.removeItem("path");
        localStorage.removeItem("equipo");
        localStorage.removeItem('color1');
        localStorage.removeItem('color2');
        localStorage.removeItem('color3');
         $state.go('access.signin', {});
  }])
;