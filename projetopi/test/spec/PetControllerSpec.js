describe("PetController", function () {
	
	var $scope, $httpBackend;

	beforeEach(function () {
		module('projetopi');
		inject(function ($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', '/pets/1')
							.respond({_id: '1'});
			$httpBackend.when('GET', '/pets')
							.respond([{}]);
		});
	})

	it("Deve criar um Pet vazio quando nenhum parametro de rota for passado", 
		inject(function ($controller) {
		$controller('PetController', {
			'$scope' : $scope
		});

		expect($scope.pet._id).toBeUndefined();
	}));

	it("Deve preencher o Pet quando parâmetro de rota for passado", 
		inject(function ($controller) {
		$controller('PetController', {
			$routeParams : {petId : 1},	
			'$scope' : $scope
		});
		$httpBackend.flush();
		expect($scope.pet._id).toBeDefined();
	}));
});