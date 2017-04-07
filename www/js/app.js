// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var gprag = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      controllerAs: 'ctrl'
    })
    .state('cadastro/cliente', {
      url: '/cadastro/cliente',
      templateUrl: 'templates/cadastro-cliente.html',
      controller: 'clienteCtrl',
      controllerAs: 'ctrl'
    })
    .state('cadastro/trabalho', {
      url: '/cadastro/trabalho',
      templateUrl: 'templates/cadastro-trabalho.html',
      controller: 'trabalhoCtrl',
      controllerAs: 'ctrl'
    })
    .state('buscar/cliente', {
      url: '/buscar/cliente',
      templateUrl: 'templates/buscar-cliente.html',
      controller: 'buscarClienteCtrl',
      controllerAs: 'ctrl'
    })
    .state('avisos', {
      url: '/avisos',
      templateUrl: 'templates/avisos.html',
      controller: 'avisosCtrl',
      controllerAs: 'ctrl'
    });
});

/*
  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tab.achievements', {
    url: '/achievements',
    views: {
      'tab-achievements': {
        templateUrl: 'templates/tab-achievements.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback

});
*/
