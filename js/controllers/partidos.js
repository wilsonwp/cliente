app
   .controller('PartidosCtrl', function($scope,PartidosResource) {
    $scope.title = "Crear Comentario";
    $scope.button = "Guardar";
    $scope.Comentario = {};
    $scope.goles='';
    $scope.saveComentario = function(){
       // console.log($scope.Comentario);
        PartidosResource.save($scope.Comentario);
    }
})
.controller('GetPartidosCtrl', function($scope,$sce,PartidosResource,$http,$timeout,$rootScope,toaster){
    $scope.partidos={};
    $scope.comentarios={};
    $scope.texto='';
    $scope.pusher={};
    $scope.channel={};
    $scope.data={};
    $scope.toaster = {
        type: 'success',
        title: '',
        text: ''
    };
    
 
    var init = function()
     {
          $scope.partidos= PartidosResource.query();
    
          
     }
     $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
     
     init();

   $scope.formVisibility = false;
   
    Pusher.log = function(message) {
                         if (window.console && window.console.log) {
                           window.console.log(message);
                         }
                       };
   
    $scope.pusher = new Pusher('266bc3fa36806eff8b48', {
                         encrypted: false
                       });
                       $scope.channel = $scope.pusher.subscribe('resultados_canal');
                       $scope.channel.bind('ResultadoActualizado', function(data) {
                         //console.log(data.comentario);
                         //console.log($scope.comentariosBd);
                        // location.reload();
                           // $scope.comentarios.push(data.comentario);
                            init();
                            
                       });
   
   //
   $scope.show_timeline = function(partido_id){
       console.log(partido_id);
       $scope.comentarios = {};
          //$scope.comentariosBd = res;
    var retrieveComentarios = function () {
    $http.get('http://localhost:8000/comentariosPartido/'+partido_id)
    	.success(function (items) {
	      $scope.comentarios = items;
              console.log($scope.comentarios);
      });
  };
                retrieveComentarios();
       if($scope.formVisibility == false){
         $scope.formVisibility = true
       }
                            Pusher.log = function(message) {
                         if (window.console && window.console.log) {
                           window.console.log(message);
                         }
                       };

                       $scope.pusher = new Pusher('266bc3fa36806eff8b48', {
                         encrypted: false
                       });
                       $scope.channel = $scope.pusher.subscribe('comentarios_canal');
                       $scope.channel.bind('ComentarioCreado', function(data) {
                         //console.log(data.comentario);
                         //console.log($scope.comentariosBd);
                        // location.reload();
                           // $scope.comentarios.push(data.comentario);
                            retrieveComentarios();
                            $scope.toaster.title='Nuevo Suceso';
                            $scope.toaster.text=data.comentario.contenido;
                            $scope.pop();
                            
                       });

             
         $scope.trustAsHtml = function(value) {
            return $sce.trustAsHtml(value);
        };
        $scope.vistaComentario= function(comentario){
            var sentido = '';
            var sentido2 = '';
              switch (comentario.tipo_comentario_id){
                  
               case 0 :
                 if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-falta'>\n\
                              <span class='tl-date'>"+comentario.minuto+" Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                case 1 :
                    if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-fuera'>\n\
                              <span class='tl-date'>"+comentario.minuto+" Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                     case 2 :
                      if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-tiro'>\n\
                              <span class='tl-date'>"+comentario.minuto+".Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 3 :
                    if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-gol'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                 <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 4 :
                     if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-gol'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 5 :
                    if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-medio'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                 <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 6 :
                     if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-extra'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                 <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 7 :
                     if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-final'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                 <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 8 :
                     if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-amarilla'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                 <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    case 9 :
                     if(comentario.equipo_calidad == 1){
                       sentido = 'tl-item';
                       sentido2 = 'arrow left pull-up';
                   }else if (comentario.equipo_calidad == 2){
                       sentido = 'tl-item tl-left';
                       sentido2 = 'arrow right pull-up visible-left';
                   }
                     return "<li class='"+sentido+"'>\n\
                             <div class='tl-wrap b-roja'>\n\
                              <span class='tl-date'>"+comentario.minuto+" :Min.</span>\n\
                              <div class='tl-content panel padder b-a w-md w-auto-xs'>\n\
                                <span class='"+sentido2+"'></span>\n\
                                <div class='text-lt m-b-sm title_msn'><span>"+comentario.titulo+"</span></div>\n\
                                <div class='panel-body pull-in b-t b-light'>\n\
                                <a href='' class='thumb pull-right m-l m-t-xs avatar'>\n\
                                        <img src='img/a4.jpg' alt='...'>\n\
                                            <i class='on md b-white bottom'></i> <a>\n\
                                                <div class='clear'>\n\
                                                   <a href='' class='text-primary block m-b-xs'>"+comentario.contenido+" <i class='icon-twitter'></i></a>\n\
                                                            </div>  </div></div></div> </li>"            
                                         
                    break;
                    
                    
                    
                    
        }
        }
       
       
       
   }
    $scope.muestraLocal = function(partido){
            $http.get('http://localhost:8000/muestraLocal/'+partido)
    	.success(function (res) {
	      return res.goles_local;
      });
            
        }
        $scope.muestraVisitante = function(partido){
             $http.get('http://localhost:8000/muestraVisitante/'+partido)
                .success(function (res) {
	      return res.goles_visitante;
      });
            
        }
   
  
       
    

})
;