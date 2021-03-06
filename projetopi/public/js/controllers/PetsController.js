angular.module('projetopi').controller('PetsController', 
  function(Pet,$http, $scope) { 
    
    $scope.pets = [];

    $scope.filtro = '';

    $scope.usuario = '';

    function buscaUsuario () {  
    $http.get("/user")
    .then(function(response) {
        $scope.usuario = response.data;
    });
    }
    buscaUsuario();
    

    $scope.mensagem = {texto: ''};

  
    function buscaPets() {
      Pet.query(
        function(pets) {
          $scope.pets = pets;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possível obter a lista'
          };
        }
      ); 
    }
    buscaPets();

    $scope.remove = function(pet) {
      Pet.delete({id: pet._id}, 
        buscaPets, 
        function(erro) {
          $scope.mensagem = {
            texto: 'Não foi possível remover o Pet'
          };
          console.log(erro);
        }
      );
    }; 

});