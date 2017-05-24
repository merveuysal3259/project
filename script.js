// Code goes here

var app = angular.module('cstest', ['ngAnimate', 'ngFileUpload', 'ui.grid', 'ui.grid.pagination', 'ui.grid.selection', 'ngRoute', 'ui.bootstrap', 'ui.grid.edit'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/ana', {
    templateUrl: 'ana.html',
    controller: 'AnaKtrl'
  }).
  when('/info', {
    templateUrl: 'info.html',
    controller: 'InfoKCtrl'
  }).
  when('/galeri', {
    templateUrl: 'galeri.html',
    controller: 'GaleriKtrl'
  }).
  when('/iletisim', {
    templateUrl: 'iletisim.html',
    controller: 'IletisimKtrl'
  }).
  otherwise({
    redirectTo: '/ana'
  });
}])


.controller('AnaKtrl', ['$scope', function($scope) {
   console.log($scope);
}])

.controller('InfoKtrl', ['$scope', function($scope) {
  console.log($scope);
}])

.controller('GaleriKtrl', ['$scope', function($scope) {
  console.log($scope);
}])

.controller('IletisimKtrl', ['$scope', function($scope) {
  console.log($scope);
}]);