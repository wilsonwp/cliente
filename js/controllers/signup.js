'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http','$state','SignResource','toaster','multipartForm','EquiposResource','FlashResource', function($scope, $http, $state,SignResource,toaster,multipartForm,EquiposResource,FlashResource) {
    $scope.user = {};
    $scope.respuesta = {};
    $scope.equipos = EquiposResource.query();
    $scope.msgInput="";
    $scope.toaster = {
        type: 'error',
        title: 'Hubo un Error',
        text: ''
    };
    $scope.authError = null;
    $scope.signup = function(resp) {
            console.log($scope.user);
            var uploadUrl='http://localhost:8000/hinchas';
<<<<<<< HEAD
             $scope.format(uploadUrl,$scope.user);
           // $state.go('access.signin', {});
=======
            multipartForm.post(uploadUrl,$scope.user);
            $state.go('access.signin', {});
            $scope.pop();
>>>>>>> 0dd728124a2c9b73cbc712adc9589194fba2e5d8
            
        
    }
    $scope.format = function(uploadUrl, data){
		var fd = new FormData();
		for(var key in data)
			fd.append(key, data[key]);
		var result = $http.post(uploadUrl, fd, {
			transformRequest: angular.indentity,
			headers: { 'Content-Type': undefined }
		});
               result.success(function (data) { 
                      $scope.toaster.text =  data.mensaje;
                      $scope.toaster.type =  "success";
                      $scope.toaster.title =  "Mensaje";
                      $scope.pop();  
                      console.log(data);    
                  }).error(function(data){
                      $scope.toaster.type =  "error";
                      $scope.toaster.title =  "Problema al Registrar";
                      $scope.respuesta=  data.mensaje;
                      $scope.toaster.text =  $scope.respuesta.email;
                      $scope.pop();
                     
                  });
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