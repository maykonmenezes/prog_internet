var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    nome: { 
      type: String, 
      required: true
    }, 
    descricao: { 
      type: String, 
      required: true
    }, 
    categoria: { 
      type: String, 
      required: true
    }, 
    email: {
      required: true, 
      type: String, 
      index: {
        unique: true
      }
    },
    inclusao: { 
          type: Date, 
          default: Date.now 
        },
    idade: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    sexo: {
      type: String,
    },
    dono: {
      type: String,
      required: true
    },
    usuario: {
      type: String,
      required: true
    },
    comentarios: [{
      titulo: String,
      corpo: String,
      inclusao: {type: Date, default: Date.now}
    }] 
    
  }, {strict: false});

  return mongoose.model('Pet', schema);
};