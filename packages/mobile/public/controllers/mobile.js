'use strict';

angular.module('mean.mobile').controller('MobileController', ['$rootScope', '$scope', 'Global', 'Mobile', 'Menus',
  function($rootScope, $scope, Global, Mobile, Menus) {
    $scope.global = Global;
    $scope.menus = {};
    $scope.package = {
      name: 'mobile'
    };

      // Default hard coded menu items for main menu
      var defaultMainMenu = [

      ];

      // Query menus added by modules. Only returns menus that user is allowed to see.
      function queryMenu(name, defaultMenu) {

          $scope.menus.main = defaultMenu;
          Menus.query({
              name: name,
              defaultMenu: defaultMenu
          }, function(menu) {
              $scope.menus[name] = menu;
          });
      }

      // Query server for menus and check permissions
      queryMenu('main', defaultMainMenu);

      $rootScope.$on('loggedin', function() {

//          $scope.menus.main = [{
//              title: 'mobile example page',
//              link: 'mobile example page',
//              roles: ['authenticated'],
//              menu: 'main'
//          }];

          $scope.global = {
              authenticated: !! $rootScope.user,
              user: $rootScope.user
          };
      });

      $rootScope.$on('$routeChangeStart', function(){
          $rootScope.loading = true;
      });

      $rootScope.$on('$routeChangeSuccess', function(){
          $rootScope.loading = false;
      });

      var scrollItems = [];

      for (var i=1; i<=100; i+= 1) {
          scrollItems.push('Item ' + i);
      }

      $scope.scrollItems = scrollItems;
      $scope.invoice = {payed: true};

      $scope.userAgent =  navigator.userAgent;
      $scope.chatUsers = [
          { name: 'Carlos  Flowers', online: true },
          { name: 'Byron Taylor', online: true },
          { name: 'Jana  Terry', online: true },
          { name: 'Darryl  Stone', online: true },
          { name: 'Fannie  Carlson', online: true },
          { name: 'Holly Nguyen', online: true },
          { name: 'Bill  Chavez', online: true },
          { name: 'Veronica  Maxwell', online: true },
          { name: 'Jessica Webster', online: true },
          { name: 'Jackie  Barton', online: true },
          { name: 'Crystal Drake', online: false },
          { name: 'Milton  Dean', online: false },
          { name: 'Joann Johnston', online: false },
          { name: 'Cora  Vaughn', online: false },
          { name: 'Nina  Briggs', online: false },
          { name: 'Casey Turner', online: false },
          { name: 'Jimmie  Wilson', online: false },
          { name: 'Nathaniel Steele', online: false },
          { name: 'Aubrey  Cole', online: false },
          { name: 'Donnie  Summers', online: false },
          { name: 'Kate  Myers', online: false },
          { name: 'Priscilla Hawkins', online: false },
          { name: 'Joe Barker', online: false },
          { name: 'Lee Norman', online: false },
          { name: 'Ebony Rice', online: false }
      ];
  }
]);
