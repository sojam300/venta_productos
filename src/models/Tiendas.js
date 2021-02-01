const mongoose = require('mongoose');
const {Schema} = mongoose;

const TiendaSchema = new Schema({
    nombre: {type: String, required:true , unique:true},
    categoria: {type:String, required:true},
    direccion: {type:String, required:true},
    telefono: {type:String, required:true},
    date:{type:Date, default:Date.now}
});
module.exports = mongoose.model('Tienda', TiendaSchema);