angular.module('projetopi').factory('Usuario', function($resource) {
	
	return $resource('/user');
});