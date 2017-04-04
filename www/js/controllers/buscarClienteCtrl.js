gprag.controller('buscarClienteCtrl', function($window, $state) {

    console.log("CARRREGADO : buscarClienteCtrl ");
    var ctrl = this;

    ctrl.voltar = function(){
      $state.go("home");
    }

})
