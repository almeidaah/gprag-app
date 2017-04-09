gprag.factory('clienteService', function ($http) {

  $http.defaults.headers.common = {
      'Accept': 'application/json;odata=verbose',
      'Access-Control-Allow-Origin':'*'
  };

  var _cadastrar = function (cliente) {

      console.log(cliente);

      return $http({
          url: "http://localhost:8080/gprag/v1/client",
          method: "POST",
          params: {
            'nome' : cliente.nome,
            'email': cliente.email,
            'endereco': cliente.endereco,
            'periodoNecessidade': cliente.periodoNecessidade.getTime(),
            'status': cliente.status,
            'telefone': cliente.telefone
          }
      });
  };

  return{
    cadastrar : _cadastrar
  }
});
