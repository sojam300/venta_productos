var numPedidos = 0;
$('#exampleModal').on('show.bs.modal', function (event) {
    
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    /*
    $(function (){
        var id = recipient;
        var jsonID = {
            ID: id
        }
        
        $.ajax({
           
            type: "POST",
            url: "/pedidos/send-info/"+id,
            data: jsonID,
           
            beforeSend: function () {
    
            },
            complete: function (data) {
    
               
            },
            success: function (data) {
               console.log("Success");
            },
            error: function (data) {
              
    
            }
        });
        // Nos permite cancelar el envio del formulario
        return false;
    });
    */
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    var href1 = $("#logotienda").attr('src');

    var NombreProducto = $("#nombre-producto"+recipient+"").text();
    var CantidadProducto = $("#cantidad"+recipient+"").text();
    var PrecioProducto = $("#precio"+recipient+"").text();   
    
    modal.find('.modal-tittle-img').attr("src",href1);

    numPedidos = 1 + numPedidos;
    $('#detPedidos').append(`<div class="row justify-content-center align-items-center" >
                                <div class="col">
                                <p id="nombreProductos`+numPedidos+`" >`+NombreProducto+`</p>
                                </div>
                                <div class="col-auto">
                                <p id="cantidadProductos`+numPedidos+`">`+CantidadProducto+`</p>
                                </div>
                                <div class="col text-right ">
                                <p id="precioProductos`+numPedidos+`">`+PrecioProducto+`</p>
                                </div>
                            </div>
                            
                            `);
    
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
    var precioTotal = 0;
    for(i=1; i<=numPedidos; i++){
     var precioProductos=   $('#precioProductos'+i+'').text();
      precioTotal = precioTotal+ parseFloat(precioProductos);
    }
    $('#totalPedido').text(precioTotal);
  });

  function reiniciarPedido(){
      numPedidos = 0;
     
    $('#detPedidos').empty();
    $('#totalPedido').text(0);
    $('#nombreCliente').val('');
    $('#celularCliente').val('');
    $('#direccionCliente').val('');
    
  }

  $('#realizar-pedido').on('click', function (e) {
    
    const nombreCliente = $('#nombreCliente').val();
    const celularCliente = $('#celularCliente').val();
    const direccionCliente = $('#direccionCliente').val();
    
    console.log(nombreCliente);
    
    if(!nombreCliente || !celularCliente || !direccionCliente){
        console.log("NO HAY DATOS DE CLIENTE");
        e.stopPropagation();
    }else{
        e.preventDefault();
        $('#exampleModal').modal('hide')

        var numNombres ;
        var jsonNombres =[];
        var numCantidades ;
        var jsonCantidades =[];
        var numPrecios ;
        var jsonPrecios =[];
        var totalData = $('#totalPedido').text();
        var tiendaData = $('#nombreTienda').text();
        
        for(i=1; i<=numPedidos; i++){
          numNombres = jsonNombres.push($('#nombreProductos'+i+'').text());
          numCantidades = jsonCantidades.push($('#cantidadProductos'+i+'').text());
          numPrecios = jsonPrecios.push($('#precioProductos'+i+'').text());
       }     
       const sendData = {
          jsonNombres,
          jsonCantidades,
          jsonPrecios,
           totalData,
           tiendaData,
           nombreCliente,
           celularCliente,
           direccionCliente
       }
       const sendDataWsp = {
           "phone": "51982556006" ,
           "body": "HOLA"
       }
       
       $.ajax({
          type: "POST",
          url: "solicitaPedido",          
          data: {'array': JSON.stringify(sendData)},
          
          success: function (data) {
              
              console.log(data);
              swal("Tu pedido fue realizado","En breve se comunicaran para confirmar =)", "success");
          },
          
      });
      reiniciarPedido();
    }
     
});