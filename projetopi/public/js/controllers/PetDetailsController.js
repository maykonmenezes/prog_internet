angular.module('projetopi').controller('PetDetailsController', 
	function($http, $scope, Pet, $routeParams) {

		$scope.usuario = '';

	    function buscaUsuario () {  
	    $http.get("/user")
	    .then(function(response) {
	        $scope.usuario = response.data;
	    });
	    }
	    buscaUsuario();

		Pet.get({id: $routeParams.petId}, 
				function(pet) {
					$scope.pet = pet;
				}, 
				function(erro) {
					$scope.mensagem = {
					  texto: 'pet não existe. Novo pet.'
					};
				}
			);	


});