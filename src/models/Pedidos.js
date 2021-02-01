const mongoose = require('mongoose');
const {Schema} = mongoose;

const PedidosSchema = new Schema({
    nombre_cliente: {type: String, required:true},
    dir_cliente: {type: String, required:true},
    telefono_cliente: {type: String, required:true},
    //nombre_producto: {type: String, required:true},
    detalle_pedido: {type: String, required:true},
    precio_total: {type: Number, required:true},
    tienda: {type:String, required:true},
    //categoria: {type:String, required:true},
    //subcategoria: {type:String, required:true},
    date:{type:Date, default:Date.now}
});

module.exports = mongoose.model('Pedidos', PedidosSchema);