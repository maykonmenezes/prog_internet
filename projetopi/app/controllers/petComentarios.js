module.exports = function (app) {
	
	var Pet = app.models.pet;

  	var controller = {}

  	controller.obtemPetComentarios = function(req, res) {

    var _id = req.params.id;
    Pet.findById(_id).exec()
    .then(
      function(pet) {
        if (!pet) throw new Error("Pet não encontrado");
        res.json(pet.comentarios)     
      }, 
      function(erro) {
        console.log(erro);
        res.status(404).json(erro)
      }
    );    
  };



controller.salvarPetComentario = function (req, res) {

    var petId = req.params.id;
    Pet.findByIdAndUpdate(petId,
      { $push : { comentarios: req.body } },
      function(err, comment) {
        if (err) {
          return (500, {
            message: 'Error adding comment to post.',
            error: err
          });
        }
        return res.json({ message: 'added comment', comment: comment });
      }
    );
  };



  controller.removePetComentario = function(req, res) { 

    var _idPet = req.params.id;
    var _idPetComentario = req.params.cId;
    
    Pet.findByIdAndUpdate(_idPet, {
      $pull: {comentarios: {
        _id: _idPetComentario
      }}
    }, function(erro){
      if (erro) {
        return res.status(500).json({
          message: 'Erro ao deletar comentario'
        });
      }
      return res.status(204).json({});
    });
  };

	return controller;
};