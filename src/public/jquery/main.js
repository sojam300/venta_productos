$(document).ready( function(){
});  
    $("#COMIDAS").click(function(){
        $('#COMIDAS').attr('class', 'img-optActive col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');        
        
        $('#BEBIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        $('#FRUTASYVERDURAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#ROPA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#TECNOLOGIA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 

        const ID = $('#COMIDAS').attr('id');
        
        GetSubcategoria(ID);
    

    });
    $("#BEBIDAS").click(function(){
        $('#BEBIDAS').attr('class', 'img-optActive col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');        
        
        $('#COMIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        $('#FRUTASYVERDURAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#ROPA').attr('class', 'img-opt col-4 col-sm-3col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#TECNOLOGIA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 

        const ID = $('#BEBIDAS').attr('id');
        GetSubcategoria(ID);
    });
    $("#FRUTASYVERDURAS").click(function(){
        $('#FRUTASYVERDURAS').attr('class', 'img-optActive col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');        
        
        $('#BEBIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        $('#COMIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#ROPA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#TECNOLOGIA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        const ID = $('#FRUTASYVERDURAS').attr('id');
        GetSubcategoria(ID);
    });
    $("#ROPA").click(function(){
        $('#ROPA').attr('class', 'img-optActive col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');        
        
        $('#BEBIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        $('#FRUTASYVERDURAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#COMIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#TECNOLOGIA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 

        const ID = $('#ROPA').attr('id');
        GetSubcategoria(ID);
    });
    $("#TECNOLOGIA").click(function(){
        $('#TECNOLOGIA').attr('class', 'img-optActive col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');        
        
        $('#BEBIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        $('#FRUTASYVERDURAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#ROPA').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center');   
        $('#COMIDAS').attr('class', 'img-opt col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2  text-center'); 
        const ID = $('#TECNOLOGIA').attr('id');
        GetSubcategoria(ID);  
    });
     



var JsonSubcat = [];
    var NumSubcat;
function GetSubcategoria (ID){
    console.log("INICIO");
    JsonSubcat = [];
    NumSubcat= 0;
    $.ajax({
        type: "POST",
        url: "GetSubcategoria",
        data: "id="+ID ,
        success: function (data) {
            console.log(data.length);
            ///
            if(data !=null){
                let subcategoria = $('#subcategoria');
                let tienda = $('#tienda');
                let TitleTienda = $('#TitleTienda');
                
                subcategoria.html(''); 
                tienda.html('') ;
                TitleTienda.html('');  

                $('#titleSubcategoria').attr('style', 'display: show'); 
                data.forEach(response => {
                    subcategoria.append(` 
                    <div class="img-opt col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center" id=${response.subcat_abreviado} onclick=ClickSubcat('${response.subcat_abreviado}')>        
                        <img src="https://mallsojam.s3.amazonaws.com/${response.subcat_abreviado}.png" class="col-md-12 " alt="">        
                        <h5 class="col-md-12">${response.subcat_descripcion}</h5>
                    </div>                       
                
                `)
                
                NumSubcat = JsonSubcat.push(response.subcat_abreviado);
                });
                tienda.append(`
                      
                `); 
                TitleTienda.append(`
                     
                `); 
            }
            if(data.length=='0'){
                console.log("NO HAY DATA");
                let input = $('#subcategoria');
                input.html('');       
               
                    input.append(` 
                    <div class="img-opt col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 mx-auto text-center" >        
                        <img src="https://mallsojam.s3.amazonaws.com/manwork.png" class="col-md-12 " alt="">        
                        <h5 class="col-md-12">DISPONIBLE PROXIMAMENTE</h5>
                    </div>                      
                `) ;
                $('#tienda1').attr('style', 'display: none');    
                $('#producto').attr('style', 'display: none');
                $('#titleSubcategoria').attr('style', 'display: none');            
            }
         
        },
        
    });
}


var JsonTienda = [];
var NumTienda;
function GetTienda (ID){
    JsonTienda = [];
    NumTienda = 0;
    $.ajax({
        type: "POST",
        url: "GetTienda",
        data: "id="+ID ,
        success: function (data) {
            console.log(data.length);
            ///
            if(data !=null){
                let input = $('#opciones');
                let TitleTienda = $('#TitleTienda');
               
                input.html(''); 
                TitleTienda.html('') ;

                
                TitleTienda.append(`
                    <h4> Seleccione una Tienda</h4>    
                    `);         
                data.forEach(response => {
                    input.append(`
                    <div class="opcion " onclick=selectOpcion('${response.tienda_abreviado}') id="${response.tienda_abreviado}">
                        <div class="contenido-opcion ">
                            <img src="https://mallsojam.s3.amazonaws.com/marinos/${response.tienda_abreviado}.png" alt="">
                            <div class="textos">
                                <h3 class="titulo" id="nombreTienda">${response.tienda_nombre}</h3>
                                
                            </div>
                        </div>
                    </div> 
                                         
                
                `)
                $('#tienda1').attr('style', 'display: show');
                NumTienda = JsonTienda.push(response.tienda_abreviado);
                });
                
            }
            if(data.length=='0'){
                console.log("NO HAY DATA");
                let input = $('#opciones');
                let TitleTienda = $('#TitleTienda');
                input.html('');   
                TitleTienda.html('') ;

                TitleTienda.append(`
                    <h4> Seleccione una Tienda</h4>    
                    `);       
                
                input.append(` 
                <div class="opcion" onclick=selectOpcion(this)>
                        <div class="contenido-opcion">
                            <img src="https://mallsojam.s3.amazonaws.com/manwork.png" alt="">
                            <div class="textos">
                                <h3 class="titulo">DISPONIBLE PROXIMAMENTE</h3>
                                
                            </div>
                        </div>
                    </div> 
                                        
                `)   
                $('#tienda1').attr('style', 'display: show');
                $('#producto').attr('style', 'display: none');             
            }
         
        },
        
    });
}

function ClickSubcat (subcat){
    console.log(subcat);
    console.log(JsonSubcat);
       $(`#`+subcat+``).attr('class', 'img-optActive col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center');  

       for(i=0; i<NumSubcat; i++){
           var OneSubcat = JsonSubcat[i];
           console.log(OneSubcat);
           if(OneSubcat!=subcat){
            $(`#`+OneSubcat+``).attr('class', 'img-opt col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center'); 
           }    
       }
    GetTienda(subcat);
}
function ClickTienda (tienda){
    console.log(tienda);
    console.log(JsonTienda);
       $(`#`+tienda+``).attr('class', 'img-optActive col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center');  
       for(i=0; i<NumTienda; i++){
           var OneTienda = JsonTienda[i];
           console.log(OneTienda);
           if(OneTienda!=tienda){
            $(`#`+OneTienda+``).attr('class', 'img-opt col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center'); 
           }    
       }    
}

