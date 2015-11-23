'use strict';

/**
 * @ngdoc overview
 * @name angularCsssApp
 * @description
 * # angularCsssApp
 *
 * Main module of the application.
 */
angular
  .module('angularCsssApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'hljs',
    'templates'
  ])
  .config(function(hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 2 spaces
      tabReplace: '  '
    });
  });