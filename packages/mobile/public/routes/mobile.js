'use strict';

angular.module('mean.mobile').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('list', {
      url: '/mobile/list',
      templateUrl: 'mobile/views/list.html'
    }).state('create', {
        url : '/mobile/create',
        templateUrl: 'mobile/views/create.html'
    }).state('scroll',{
        url: '/mobile/scroll',
        templateUrl: 'mobile/views/scroll.html'
    }).state('toggle',{
        url: '/mobile/toggle',
        templateUrl: 'mobile/views/toggle.html'
    }).state('tabs',{
        url: '/mobile/tabs',
        templateUrl: 'mobile/views/tabs.html'
    }).state('accordion',{
        url: '/mobile/accordion',
        templateUrl: 'mobile/views/accordion.html'
    }).state('overlay',{
        url: '/mobile/overlay',
        templateUrl: 'mobile/views/overlay.html'
    }).state('forms',{
        url: '/mobile/forms',
        templateUrl: 'mobile/views/forms.html'
    }).state('carousel',{
        url: '/mobile/carousel',
        templateUrl: 'mobile/views/carousel.html'
    });
  }
]);
