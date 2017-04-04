gprag.controller('clienteCtrl', function($window, $state) {

    console.log("CARRREGADO : clienteCtrl ");

    var ctrl = this;

    ctrl.cadastrar = function(){
    }

    ctrl.voltar = function(){
      $state.go("home");
  	}
})
