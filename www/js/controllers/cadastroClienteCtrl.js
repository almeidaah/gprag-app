gprag.controller('clienteCtrl', function($window, $state) {

    console.log("CARRREGADO : clienteCtrl ");

    var ctrl = this;
    ctrl.cliente = {};
    ctrl.cliente.email = "";
    ctrl.cliente.periodoNecessidade=new Date();

    ctrl.cadastrarCliente = function(cliente){

      //if(cliente.email)
        ctrl.cliente.nome;
        ctrl.cliente.periodoNecessidade;
    };

    ctrl.voltar = function(){
      $state.go("home");
  	};
})
