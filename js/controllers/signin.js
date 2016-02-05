'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http','$location', '$state','$auth','toaster','AuthenticationService','FlashService', function($scope, $http,$location, $state, $auth,toaster,AuthenticationService,FlashService) {
    var credentials = {};
    var vm = this;
    $scope.toaster = {
        type: 'error',
        title: 'Ha Ocurrido un Error',
        text: 'Usuario o Contraseña Incorrecto'
    };
    (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
    $scope.login = function() {
     $scope.form.dataLoading = true;   
    var credentials= {email:$scope.user.email,password:$scope.user.password};
    var resultado = $http.post("http://localhost:8000/api/authenticate", credentials);
    resultado.then(function successCallback(response) {
        AuthenticationService.SetCredentials($scope.user.email,$scope.user.password);
        localStorage.setItem("email",$scope.user.email);
         $state.go('app.partidos', {});
  }, function errorCallback(response) {
      $scope.pop();
       $scope.form.dataLoading = false;
  });

    };
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
  }])
;