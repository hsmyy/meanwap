/**
 * Created by fc on 14-10-9.
 */
'use strict';
angular.module('mean.mobile').controller('ListController', ['$rootScope', '$scope', 'Global', 'Mobile', 'Menus', '$http',
    function($rootScope, $scope, Global, Mobile, Menus, $http){

    $http.get('/person/3').success(function(data){
        $scope.friends = data;
        console.log(data);
    });

    $scope.search = '';
    $scope.page = 1;
    $scope.cur = 0;

    $scope.create = {};
    $scope.create.key = '';
    $scope.create.val = '';

    $scope.choose = function(idx){
        $scope.page = 2;
        $scope.cur = idx;
    };

    $scope.back = function(){
        $scope.page = 1;
    };

    $scope.create = function(){
        $http.post('/person/3/friends/'+$scope.friends.persons[$scope.cur].name+'/'+$scope.create.key+'/'+$scope.create.val).success(function(data){
            $scope.friends.persons[$scope.cur].data.push({
                key : $scope.create.key,
                value : $scope.create.val
            });
        });
    };
}]);