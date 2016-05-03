var verificaAutenticacao = require('../../config/auth')

module.exports = function (app) {
	
  var controller = app.controllers.pet;

  app.route('/pets')
  	.get(controller.listaPets)
  	.post(verificaAutenticacao, controller.salvaPet);

  app.route('/pets/:id')
	.get(controller.obtemPet)
	.delete(verificaAutenticacao, controller.removePet);


};
