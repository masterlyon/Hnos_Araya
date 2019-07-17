var product = $.ajax({
  url:"https://my-json-server.typicode.com/masterlyon/API_pav/Musica_Popular",
  method:"GET"
});
product.done(function(data){
  console.log(data)
  data.forEach(function(item, index){
    console.log(item.name)
    $('#catal').append('<div class="col-xs-4">' +
      '<h4>'+item.nombre+'</h4>' +
      '<img src="'+item.imagen+'"/>' +
      '<p> Descripcion: '+item.descripción+'</p>' +
      '<p> Categoria: '+item.categoria+'</p>' +
      '<p> Precio: '+item.precio+'</p>' +
      '</div>');
  });
});

product.fail(function(error){
  console.log(error);
});