const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    nombre: {type: String, required:true , unique:true},
    precio: {type: Number, required:true},
    tienda: {type:String, required:true},
    categoria: {type:String, required:true},
    subcategoria: {type:String, required:true},
    date:{type:Date, default:Date.now}
});
module.exports = mongoose.model('Producto', ProductSchema);