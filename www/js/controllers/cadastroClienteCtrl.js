gprag.controller('clienteCtrl', function($window, $state) {

    console.log("CARRREGADO : clienteCtrl ");

    var ctrl = this;
    ctrl.cliente = {};

    ctrl.cadastrarCliente = function(){
        ctrl.cliente.nome;
    };

    ctrl.voltar = function(){
      $state.go("home");
  	};
})
