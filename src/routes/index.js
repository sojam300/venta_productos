const express = require('express');
const router = express.Router();
const pool = require('../database');
const { route } = require('./links');
const apiWSP = require('../wsp');
// TRY


const accountSid = 'ACd7ac95fed35ca7ca3522d6aea41b1030'; 
const authToken = '0b6c0e3fc3b517725f88b160296071bb'; 
const client = require('twilio')(accountSid, authToken); 

router.get('/', async(req, res) =>{
    const DataCat = await pool.query("select * from categoria where estado = '1'");
    console.log(DataCat);
    res.render('index', {DataCat});
});
router.get('/tienda', (req, res) =>{
    res.render('tienda');
});
router.get('/categorias/comidas', (req, res) =>{
    res.render('categorias/comidas');
});
router.get('/categorias/subcategorias/marinos', (req, res) =>{
    res.render('categorias/subcategorias/marinos');
});
router.get('/categorias/subcategorias/puntosmarinos/deljere', (req, res) =>{
    res.render('categorias/subcategorias/puntosmarinos/deljere');
});

router.post('/GetSubcategoria', async(req, res)=>{
    const {id} = req.body;
    const Data = await pool.query('select * from  subcat_resumen where cat_abreviado =?', [id]);
    res.send(Data);
    console.log(Data);
});
router.post('/GetTienda', async(req, res)=>{
    const {id} = req.body;
    console.log(id);
    const Data = await pool.query("select * from  tienda_resumen where subcat_abreviado ='" + [id] + "' and tienda_estado = '1'");
    res.send(Data);
    console.log(Data);
    
});
router.post('/GetProductos', async(req, res) =>{
    
    const {id} = req.body;
    console.log(id);
    const Data = await pool.query("select * from producto_resumen where tienda_nombre ='" + [id] + "' ");
    res.send(Data);
    
});


router.post('/solicitaPedido', async(req, res) =>{
    const {array} = (req.body);
    const data = JSON.parse(array);
    const {jsonNombres, jsonCantidades, jsonPrecios, totalData, tiendaData, nombreCliente, celularCliente, direccionCliente} = data; 

    
    const idTienda = await pool.query("select id from tienda where nombre ='"+[tiendaData]+"' and estado = '1' ");
    const numData = data.jsonNombres.length;
    var nombresCantidad;
    var nombresJson = [];
    var catidadCantidad;
    var cantidadJson = [];
    var preciosCantidad;
    var preciosJson = [];

   for(i=0; i<numData; i++){
        await pool.query("insert into `pedidos` (`id_pedido`, `id_tienda`, `nombre`, `cantidad`, `precio`, `total`, `nombre_cliente`, `direccion_cliente`, `referencia`,`celular_cliente`) values('1', '"+[idTienda[0].id]+"', '"+[jsonNombres[i]]+"','"+[jsonCantidades[i]]+"', '"+[jsonPrecios[i]]+"', '"+[totalData]+"', '"+[nombreCliente]+"', '"+[direccionCliente]+"','"+[direccionCliente]+"', '"+[celularCliente]+"')");
         nombresJson.push('/// '+jsonCantidades[i]+' ' + jsonNombres[i]+ ' '+ 'S/.' + jsonPrecios[i]);
    }

    console.log(nombresJson);
    const textMessage ='NUEVO PEDIDO: \n'+ nombresJson.toString()+'\n -EL TOTAL ES: S/.'+totalData+'\n -NOMBRE DE CLIENTE: '+nombreCliente+'\n -CELULAR: '+celularCliente+'\n -DIRECCION DE ENVIO: '+direccionCliente;
    apiWSP.sendMessage('51'+celularCliente, textMessage+'\n'+'');

   
   res.send("PEDIDO EN PROCESO");
});  


module.exports = router;