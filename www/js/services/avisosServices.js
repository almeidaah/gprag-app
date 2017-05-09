gprag.factory('avisosService', function ($http, SERVICE_URL) {

  $http.defaults.headers.common = {
      //'Authorization': 'Basic Z3ByYWctc2VydmljZTpncHJhZy1zZXJ2aWNl',
      'Accept': 'application/json;odata=verbose'
      //'Access-Control-Allow-Origin':'*'
  };

  var _findClientsToExpire = function (cliente) {
      return $http({
          url: SERVICE_URL + '/gprag/v1/alerts/findClientsToExpire',
          method: 'GET'
      });
  };

  var _findExpiredClients = function (cliente) {
      return $http({
          url: SERVICE_URL + '/gprag/v1/alerts/findExpiredClients',
          method: 'GET'
      });
  };

  return{
    findClientsToExpire :_findClientsToExpire,
    findExpiredClients : _findExpiredClients
  }
});
