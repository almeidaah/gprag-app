gprag.controller('homeCtrl', function($window, $state) {

    console.log("CARRREGADO : homeCtrl ");

    var ctrl = this;

    ctrl.listarAvisos = function(){
      $state.go("avisos");
    }

    ctrl.novoCadastroCliente = function(){
      $state.go("cadastro/cliente");
    }

    ctrl.novoCadastroTrabalho = function(){
      $state.go("cadastro/trabalho");
    }

    ctrl.buscarCliente = function(){
      $state.go("buscar/cliente");
    }

    ctrl.sobreMim = function(){
      $state.go("sobre");
    }
})
