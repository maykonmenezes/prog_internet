angular.module('projetopi').controller('PetController', 
	function($http, $scope, Pet, $routeParams) {

		$scope.usuario = '';

	    function buscaUsuario () {  
	    $http.get("/user")
	    .then(function(response) {
	        $scope.usuario = response.data;
	    });
	    }
	    buscaUsuario();

		if($routeParams.petId) {
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
		} else {
			$scope.pet = new Pet();
		}


		$scope.salva = function() {
			$scope.pet.usuario = $scope.usuario.usuarioLogado;
		  $scope.pet.$save()
		  	.then(function() {
		  		$scope.mensagem = {texto: 'Salvo com sucesso! :)'};
		  		// limpa o formulário
		  		$scope.pet = new Pet();
		  	})
		  	.catch(function(erro) {
		  		$scope.mensagem = {texto: 'Não foi possível salvar! :('};
		  	});
		};	

		Pet.query(function(pets) {
			$scope.pets = pets;
    	});	
});