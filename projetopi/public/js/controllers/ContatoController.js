angular.module('projetopi').controller('ContatoController', 
  function($http, $scope) { 
    
    $scope.usuario = '';

    function buscaUsuario () {  
    $http.get("/user")
    .then(function(response) {
        $scope.usuario = response.data;
    });
    }
    buscaUsuario();
    

    $scope.mensagem = {texto: ''};

  

});