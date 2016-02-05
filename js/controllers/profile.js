'use strict';
app
.controller('ProfileCtrl', function($scope,toaster,multipartForm,EquiposResource,$location,$http){
    $scope.user = {};
   $scope.equipos = EquiposResource.query();
   $scope.id =localStorage.getItem('user_id');
   $scope.formVisibility = false;
   
   $scope.show_form = function(){
       if($scope.formVisibility == false){
           $scope.formVisibility = true;
       }
       
   }
    $scope.modificar = function($response) {
            console.log($scope.user);
            var uploadUrl='http://localhost:8000/hinchas/'+localStorage.getItem('user_id');
            $http.put(uploadUrl,$scope.user);
            
        
    }
   
   });