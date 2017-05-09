gprag.controller('homeCtrl', function($window, $state, $scope) {

    var ctrl = this;
    $scope.semConexao = true;
    $scope.mensagemErro = "Sem conexão com a internet";

    ctrl.erroConexao = false;
    ctrl.mensagemErro = "";

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

})
