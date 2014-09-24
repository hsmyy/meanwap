'use strict';

angular.module('mean.mobile').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mobile example page', {
      url: '/mobile/example',
      templateUrl: 'mobile/views/index.html'
    });
  }
]);
