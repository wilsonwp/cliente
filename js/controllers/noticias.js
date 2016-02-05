'use strict';
app
.controller('NoticiasCtrl', function($scope,NoticiaResource,CategoriaNoticiaResource,$sce){
    $scope.noticias={};
    $scope.categoriaNoticias={};
    
 
    var init = function()
     {
          $scope.noticias= NoticiaResource.query();
          $scope.categoriaNoticias=CategoriaNoticiaResource.query();
          
     }
     
     init();
     $scope.trustAsHtml = function(value) {
            return $sce.trustAsHtml(value);
        };
     
       console.log($scope.noticias);
   }
   );