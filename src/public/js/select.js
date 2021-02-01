// ANIMACION DE SELECCIONAR TIENDA

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');





function selectOpcion(data) {

  const html = document.querySelector('#' + data + '').innerHTML;
  const htmlText = document.querySelector('#' + data + '').innerText;

  select.classList.toggle('active');
  opciones.classList.toggle('active');
  contenidoSelect.innerHTML = html;
  hiddenInput.value = htmlText;
  const Tienda = htmlText;

  $.ajax({
    type: "POST",
    url: "GetProductos",
    data: "id=" + Tienda,
    success: function (data) {
      console.log(data.length);
      ///
      if (data != null) {
        let divProdcuto = $('#producto');
       
       
        divProdcuto.html('');

        data.forEach(response => {
          
          divProdcuto.append(` 
                  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center  p-4 product ">        
                        <div class="row justify-content-center ">
                        ` + 
                        (response.producto_esp > 0 ? `<div class="p-1 col  col-2 ">
                        <button class="top-product-start" data-toggle="tooltip" data-placement="top" title="Especialidad de la casa"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg></button> 
                    </div>`: '') +
                        `                            
                            <div class="p-1  col-auto ">
                                <button class="top-product-info" data-toggle="tooltip" data-placement="top" title="${response.producto_descripcion}"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                                </svg></button>
                            </div>

                            ` + 
                            (response.producto_fav > 0 ? `<div class="p-1 col  col-2 ">
                            <button class="top-product-like" data-toggle="tooltip" data-placement="top" title="Plato favorito por los clientes"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </div> `: '') +
                            `
                                                      
                        </div>
                    
                    <div>
                        <img src="https://mallsojam.s3.amazonaws.com/${response.subcat_abreviado}/${response.tienda_abreviado}/${response.producto_abreviado}.png" class="col-md-12 " alt="">
                    </div>
                    <h5 class=" textproduct col-sm-8 col-md-8  mx-auto" id="nombre-producto${response.producto_id}">${response.producto_nombre}</h5>     
                    
                    <div class="col-md-8 mx-auto   ">
                        
                        <button class=" btn-sm btnorden p-1"data-toggle="modal" data-target="#exampleModal" data-whatever="${response.producto_id}">Añadir al Pedido<svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-cart-plus"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                <path fill-rule="evenodd"
                                    d="M8.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg></button>
                    </div>
                    <div class="row text-center mx-auto  justify-content-center align-items-center ">
                        <div class="col-4">
                            <div class="row justify-content-end align-items-center  ">
                            <h6 class="">S/&nbsp</h6>
                            <h5 class=" precio-cc" id="precio${response.producto_id}">${response.producto_precio}</h5>
                        </div>
                        </div>
                        
                        <div class=" col-6 ">
                            <div class=" row  justify-content-md-center align-items-center ">
                                <i class="fas fa-angle-left prev text-dark" id="rem_cc" onclick=OneSubtract(${response.producto_id})></i>
                                <h5 class="cantidad_cc" id="cantidad${response.producto_id}" >1</h5>
                                <i class="fas fa-angle-right next text-dark" id="add_cc" onclick=OneMore(${response.producto_id})></i>
                            </div>
                        </div>
                    </div>
                
                </div>                      
              
              `)

         
        });
        $('#producto').attr('style', 'display: show');
        Toggle();
      }
      if (data.length == '0') {
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
         
      }

    },

  });
}



    function Toggle(){
      $('[data-toggle="tooltip"]').tooltip();   
    };


select.addEventListener('click', () => {
  select.classList.toggle('active');
  opciones.classList.toggle('active');
});
