

 function OneMore(id){
   console.log(id);
    var Cantidad = document.querySelector("#cantidad"+id+"");
    var NewCantidad = parseInt(Cantidad.innerHTML) +1;
    

    var PrecioItem = parseFloat(document.querySelector("#precio"+id+"").innerHTML);
    
    var PrecioItemUnidad =PrecioItem/parseInt(Cantidad.innerHTML);    
    var NewPrecio = PrecioItemUnidad * NewCantidad;
    
    document.querySelector("#precio"+id+"").innerHTML = NewPrecio;
    document.querySelector("#cantidad"+id+"").innerHTML = NewCantidad;
  };

 
  function OneSubtract(id){
    var Cantidad = document.querySelector("#cantidad"+id+"");
    var NewCantidad = parseInt(Cantidad.innerHTML) -1;
    
    if(NewCantidad<1){
        NewCantidad=1;
        document.querySelector("#cantidad"+id+"").innerHTML = NewCantidad;
    }else{
        var PrecioItem = parseFloat(document.querySelector("#precio"+id+"").innerHTML);
    
    var PrecioItemUnidad =PrecioItem/parseInt(Cantidad.innerHTML);    
    var NewPrecio = PrecioItemUnidad * NewCantidad;
    
    document.querySelector("#precio"+id+"").innerHTML = NewPrecio;
    document.querySelector("#cantidad"+id+"").innerHTML = NewCantidad;
        document.querySelector("#cantidad"+id+"").innerHTML = NewCantidad;
    }  
  }

     




