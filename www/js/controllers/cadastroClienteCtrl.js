gprag.controller('clienteCtrl', function(clienteService, $window, $state) {

    console.log("CARRREGADO : clienteCtrl ");

    var ctrl = this;
    ctrl.cliente = {};

    ctrl.cliente.nome = "";
    ctrl.cliente.endereco = "";
    ctrl.cliente.telefone = "";
    ctrl.cliente.email = "";
    ctrl.cliente.status = true;
    ctrl.cliente.periodoNecessidade=new Date('2030', '00', '01');

    ctrl.cadastrarCliente = function(cliente){
      clienteService.cadastrar(cliente)
      .success(function(response){
        $state.go("cliente-sucesso");
      })
      .error(function(error){
        console.log(error);
      });

    };

    ctrl.voltar = function(){
      $state.go("home");
  	};
})
