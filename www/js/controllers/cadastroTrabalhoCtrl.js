gprag.controller('trabalhoCtrl', function($window, $state) {

    console.log("CARRREGADO : trabalhoCtrl ");

    var ctrl = this;

    ctrl.cadastrar = function(){
    }

    ctrl.voltar = function(){
      $state.go("home");
    }

})
