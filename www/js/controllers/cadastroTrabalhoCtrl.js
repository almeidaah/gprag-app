gprag.controller('trabalhoCtrl', function($window, $state) {

    console.log("CARRREGADO : trabalhoCtrl ");

    var ctrl = this;
    ctrl.trabalho = {};
    ctrl.trabalho.periodoNecessidade=new Date('2030', '00', '01');

    ctrl.cadastrarTrabalho = function(){
    }

    ctrl.voltar = function(){
      $state.go("home");
    }

})
