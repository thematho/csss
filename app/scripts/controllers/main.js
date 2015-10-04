'use strict';

/**
 * @ngdoc function
 * @name angularCsssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCsssApp
 */
angular.module('angularCsssApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
