'use strict';
app
.controller('CalendarioCtrl', function($scope,CalendarioResource){
    $scope.campeonatos={};
    
 
    var init = function()
     {
          $scope.campeonatos= CalendarioResource.query();
    
          
     }
     
     init();
     console.log($scope.campeonatos);
   $scope.formVisibility = false;
   
   $scope.show_calendario = function(jornadas){
       $scope.jornadas = jornadas;
       if($scope.formVisibility == false){
           $scope.formVisibility = true;
       }
       console.log(jornadas);
   }
   
   });