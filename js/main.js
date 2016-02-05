'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window','ProfileResource','$http', 
    function(              $scope,   $translate,   $localStorage,   $window,ProfileResource,$http ) {
     
           // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      var resultado = ProfileResource.query();
      $http.get("http://localhost:8000/hinchas/show/"+localStorage.getItem('email'))
              .success(function(data){
               console.log(data[0].id);
                localStorage.setItem('user_id',data[0].id);
               localStorage.setItem('nombre',data[0].hincha.nombre);
                localStorage.setItem('fecha_nacimiento',data[0].hincha.fecha_nacimiento);
                localStorage.setItem('telefono',data[0].hincha.num_celular);
                localStorage.setItem('path',data[0].hincha.path);
                localStorage.setItem('equipo',data[0].hincha.equipo_id);
                
              })       
                ;
       $http.get("http://localhost:8000/muestraEquipoHincha/"+localStorage.getItem('equipo'))
              .success(function(data){
               console.log(data.equipo.path);
                localStorage.setItem('color1',data.equipo.color1);
                localStorage.setItem('color2',data.equipo.color2);
                localStorage.setItem('color3',data.equipo.color3);
                localStorage.setItem('logo_equipo',data.equipo.path);
                
              });
      $scope.usuario = {
          email: localStorage.getItem('email'),
          nombre: localStorage.getItem('nombre'),
          logo: localStorage.getItem('logo_equipo'),
          foto: localStorage.getItem('path'),
          
      }
      $scope.app = {
        name: 'La Hinchada',
        version: '1.3.3',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
         themeID: 1,
          navbarHeaderColor: localStorage.getItem('color1'),
          navbarCollapseColor: localStorage.getItem('color2'),
          asideColor: localStorage.getItem('color1'),
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

  }]);