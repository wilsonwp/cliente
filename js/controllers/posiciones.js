'use strict';
app
.controller('PosicionesCtrl', function($scope,TablaResource){
    $scope.campeonatos={};
    $scope.equipos={};
   
    
 
    var init = function()
     {
          $scope.campeonatos= TablaResource.query();
    
          
     }
     
     init();
     console.log($scope.campeonatos);
   $scope.formVisibility = false;
   
   $scope.show_tabla = function(equipos){
       $scope.equipos = equipos;
       if($scope.formVisibility == false){
           $scope.formVisibility = true;
       }
       console.log(tabla);
   }
   
   });