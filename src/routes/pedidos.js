const express = require('express');
const router = express.Router();

const Producto = require('../models/Productos');

router.post('/pedidos/nuevo-pedido', async(req, res)=>{
 console.log("RECIVIDO");
});
router.post('/pedidos/send-info/:id', async(req, res)=>{
    const newProduct = new Producto({
        nombre:'Arros con Mariscos',
        precio:'20',
        tienda:'DelJere', 
        categoria:'Comidas', 
        subcategoria:'Marino'
    });
    await newProduct.save();
    const NameProduct = req.params;
    /*const {ID}=req.body;
    const errors = [];
    if(ID=1){
        errors.push({text: 'EL CODIGO DEL PRUCTO ES INVALIDO'});
    }if(errors.length>0){
        res.send(errors);
    }else{*/
        const ProductSelected = await Producto.find({"nombre":  NameProduct});
        console.log(ProductSelected[0].nombre);

        
    
    
   });
module.exports = router;