const newProduct = new Producto({
            nombre:'Arros con Mariscos',
            precio:'20',
            tienda:'DelJere', 
            categoria:'Comidas', 
            subcategoria:'Marino'
        });
        await newProduct.save();
        console.log(newProduct);

create table categoria(
    id int(11)  not null,
    descripcion varchar(100) not null
)

alter table categoria add estado varchar(1);
alter table categoria modify id int(11)not null auto_increment, auto_increment = 1; 

create table subcategoria(
    id int(11) not null,
    id_categoria int(11) not null,
    descripcion varchar(100) not null,
    estado varchar(1) not null
);
alter table subcategoria add primary key (id);
alter table subcategoria modify id int(11)not null auto_increment, auto_increment = 1; 

alter table subcategoria 
     add constraint fk_categoria  foreign key (id_categoria) references categoria(id);

create table tienda(
    id int(11) not null,
    id_subcategoria int(11) not null,
    nombre varchar(100) not null,
    abreviado varchar(100) not null,
    descripcion varchar(200) not null,
    direccion varchar(100) not null,
    celular varchar(10) not null,
    encargado varchar(100) not null,
    estado varchar(1) not null
);
alter table tienda add primary key (id);
alter table tienda modify id int(11)not null auto_increment, auto_increment = 1; 

alter table tienda 
     add constraint fk_subcategoria  foreign key (id_subcategoria) references subcategoria(id);


ALTER TABLE categoria 
CHANGE abreviatura abreviado varchar(100) not null


create table productos(
    id int(11) not null,
    id_tienda int(11) not null,
    nombre varchar(100) not null,
    abreviado varchar(100) not null,
    precio decimal(12,2) not null,
    descripcion varchar(200),
    esp_casa varchar(1),
    producto_fav varchar(1),
    estado varchar(1) not null
)
alter table productos add primary key (id);
alter table productos modify id int(11)not null auto_increment, auto_increment = 1; 

alter table productos 
     add constraint fk_tienda  foreign key (id_tienda) references tienda(id);


create table pedidos(
    id int(11) not null,
    id_pedido int(11) not null,
    id_tienda int(11) not null,
    nombre varchar(100) not null,
    cantidad int(11) not null,
    precio decimal(12,2) not null,
    total decimal(12,2) not null,
    nombre_cliente varchar(200) not null,
    direccion_cliente varchar(300) not null,
    referencia varchar(300)not null,
    celular_cliente varchar(11) not null,
    fecha_pedido timestamp not null  default current_timestamp
)
alter table pedidos add primary key (id);
alter table pedidos modify id int(11)not null auto_increment, auto_increment = 1; 
alter table pedidos 
     add constraint fk_pedidos  foreign key (id_tienda) references tienda(id);

alter view tienda_resumen as select
    categoria.id as 'cat_id',
    categoria.abreviado as 'cat_abreviado',
    subcategoria.id as 'subcat_id',
    subcategoria.descripcion as 'subcat_descripcion',
    subcategoria.id_categoria as 'subcat_id_categoria',
    subcategoria.abreviado as 'subcat_abreviado',
    tienda.id as 'tienda_id',
    tienda.nombre as 'tienda_nombre',
    tienda.abreviado as 'tienda_abreviado',
    tienda.descripcion as 'tienda_descripcion',
    tienda.direccion as 'tienda_direccion',
    tienda.celular as 'tienda_celular',
    tienda.encargado as 'tienda_encargado',
    tienda.estado as 'tienda_estado'
    from tienda
    inner join subcategoria on  tienda.id_subcategoria =  subcategoria.id
    inner join categoria on  subcategoria.id_categoria = categoria.id

alter view producto_resumen as select
    productos.id as 'producto_id',
    productos.nombre as 'producto_nombre',
    productos.abreviado as 'producto_abreviado',
    productos.precio as 'producto_precio',
    productos.descripcion as 'producto_descripcion',
    productos.esp_casa as 'producto_esp',
    productos.producto_fav as 'producto_fav',
    productos.estado as 'producto_estado',
    tienda.nombre as 'tienda_nombre',
    tienda.abreviado as 'tienda_abreviado',
    subcategoria.abreviado as 'subcat_abreviado'
    from productos
    inner join tienda on productos.id_tienda = tienda.id
    inner join subcategoria on tienda.id_subcategoria = subcategoria.id



INSERT INTO `categoria`(`descripcion`, `estado`) VALUES('BEBIDAS', '1');
INSERT INTO `categoria`(`descripcion`, `estado`) VALUES('FRUTAS Y VERDURAS', '1');
INSERT INTO `categoria`(`descripcion`, `estado`) VALUES('ROPA', '1');
INSERT INTO `categoria`(`descripcion`, `estado`) VALUES('TECNOLOGIA', '1');

INSERT INTO `c
ategoria`(`descripcion`, `estado`) VALUES('TECNOLOGIA', '1');

UPDATE `categoria` SET `abreviatura` = 'BEBIDAS' WHERE `id` = 1;
UPDATE `categoria` SET `abreviatura` = 'FRUTASYVERDURAS' WHERE `id` = 3;
UPDATE `categoria` SET `abreviatura` = 'ROPA' WHERE `id` = 4;
UPDATE `categoria` SET `abreviatura` = 'TECNOLOGIA' WHERE `id` = 5;

INSERT INTO `subcategoria`(`id_categoria`, `descripcion`, `estado`, `abreviado`) VALUES('1', 'Marinos', '1', 'marinos');
INSERT INTO `subcategoria`(`id_categoria`, `descripcion`, `estado`, `abreviado`) VALUES('1', 'A la Braza', '1', 'braza');
INSERT INTO `subcategoria`(`id_categoria`, `descripcion`, `estado`, `abreviado`) VALUES('1', 'Parrillas', '1', 'parrillas');


INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'Del Jere', 'deljere', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 119', '900900900', 'Cristian Huilcapaz', '1');

INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'Del Jere', 'deljere', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 120', '900900901', 'Sebastian Huilcapaz', '1');
INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'El Perla', 'perla', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 121', '900900901', 'Wilian Huilcapaz', '1');
INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'Mares', 'mares', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 122', '900900902', 'Salvador Huilcapaz', '1');
INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'Orgullo Norteño', 'onorteño', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 123', '9009009003', 'Gabina Palma', '1');
INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'Puro Limon', 'purolimon', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 124', '900900904', 'Mario Palma', '1');
INSERT INTO `tienda`(`id_subcategoria`, `nombre`, `abreviado`, `descripcion`, `direccion`, `celular`, `encargado`, `estado`) VALUES('1', 'Puro Limon', 'purolimon', 'Restaurant de platos Marinos', 'Calle Domingo Sarmiento 124', '900900904', 'Mario Palma', '1');



INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Ceviche Clasico', 'cevicheclasico', '25.5', 'Ceviche de lenguando acompañado de canchita, mote y camote', '1', '1', '1');

INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Arroz con Mariscos', 'arrozmariscos', '20.5', 'Delicioso Arroz con mariscos con la mejor preparacion', '1', '1', '1');
INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Doble', 'doble', '28.0', 'Combinado de Ceviche Clasico con Arroz con Mariscos', '1', '1', '1');
INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Triple', 'triple', '32.0', 'Combinado de Ceviche Clasico, Arroz con Mariscos y Chicharron de Pescado', '1', '0', '1');
INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Parihuela', 'parihuela', '29.0', 'El mejor sabor del mar a tu paladar', '0', '0', '1');
INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Sudado de Pescado', 'sudadopescado', '24.0', 'Delicioso Sudado', '1', '0', '1');
INSERT INTO `productos`(`id_tienda`, `nombre`, `abreviado`, `precio`, `descripcion`, `esp_casa`, `producto_fav`, `estado`) VALUES('1', 'Choros a la Chalaca', 'choroschalaca', '15.0', 'La mejor combinacion de cebolla tomate y mariscos', '1', '1', '1');