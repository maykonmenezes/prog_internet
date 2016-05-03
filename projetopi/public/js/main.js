angular.module('projetopi',['ngRoute', 'ngResource'])
  .config(function($routeProvider) {

    $routeProvider.when('/pets', {
      templateUrl: 'partials/pets.html',
      controller: 'PetsController'
    });

    $routeProvider.when('/pet/:petId', {
    	templateUrl: 'partials/pet.html', 
    	controller: 'PetController'
    });

    $routeProvider.when('/pet', {
      templateUrl: 'partials/pet.html',
      controller: 'PetController'
    });

    $routeProvider.when('/pet-details/:petId', {
      templateUrl: 'partials/pet-details.html',
      controller: 'PetDetailsController'
    });


    $routeProvider.when('/pets/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    $routeProvider.when('/pets/comofunciona', {
      templateUrl: 'partials/comofunciona.html',
      controller: 'ComoFuncionaController'
    });

    $routeProvider.when('/pets/porqueadotar', {
      templateUrl: 'partials/porqueadotar.html',
      controller: 'PorqueAdotarController'
    });

    $routeProvider.when('/pets/meus-pets', {
      templateUrl: 'partials/meus-pets.html',
      controller: 'MeusPetsController'
    });

    $routeProvider.when('/pets/meu-perfil', {
      templateUrl: 'partials/meu-perfil.html',
      controller: 'MeuPerfilController'
    });

    $routeProvider.otherwise({redirectTo: '/pets'});
});