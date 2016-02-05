'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http','$state','SignResource','toaster','multipartForm','EquiposResource','FlashResource', function($scope, $http, $state,SignResource,toaster,multipartForm,EquiposResource,FlashResource) {
    $scope.user = {};
    $scope.equipos = EquiposResource.query();
    $scope.msgInput="";
    $scope.toaster = {
        type: 'success',
        title: 'Exito',
        text: 'Usuario Registrado con Exito'
    };
    $scope.authError = null;
    $scope.signup = function($response) {
            console.log($scope.user);
            var uploadUrl='http://localhost:8000/hinchas';
            multipartForm.post(uploadUrl,$scope.user);
           // $state.go('access.signin', {});
            $scope.pop();
            
        
    }
     $scope.actualizar = function($response) {
            console.log($scope.user);
            var uploadUrl='http://localhost:8000/hinchas/'+localStorage.getItem('user_id');
            $http.put(uploadUrl,$scope.user);
            $state.go('access.signin', {});
            $scope.pop();
            
        
    }
    $scope.show_form = function(){
       if($scope.formVisibility == false){
           $scope.formVisibility = true;
       }
       
   }
     $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };

  }])
 ;