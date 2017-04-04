gprag.controller('avisosCtrl', function($window, $state) {

    console.log("CARRREGADO : avisosCtrl ");

    var ctrl = this;

    ctrl.voltar = function(){
      $state.go("home");
  	}
})
