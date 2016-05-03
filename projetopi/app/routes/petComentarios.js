var verificaAutenticacao = require('../../config/auth')

module.exports = function (app) {
	
  var controller = app.controllers.petComentarios;

  /* comentarios */

  app.route('/pets/:id/comentarios')
  	.get(controller.obtemPetComentarios)
    .post(controller.salvarPetComentario)

  app.route('/pets/:id/comentarios/:cId')
    .delete(controller.removePetComentario)


};
