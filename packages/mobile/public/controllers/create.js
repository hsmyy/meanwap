/**
 * Created by fc on 14-10-9.
 */
'use strict';
angular.module('mean.mobile').controller('NewPersonController',
    ['$rootScope', '$scope', 'Global', 'Mobile', 'Menus', '$http',
    function($rootScope, $scope, Global, Mobile, Menus, $http){

    $scope.person = {};
    $scope.person.name = '';
    $scope.success = false;
    $scope.create = function(){
        if($scope.person.name.trim().length > 0){
            $http.post('/person/3/friends/' + $scope.person.name.trim()).success(function(data){
                $scope.success = true;
            }).error(function(err){
                $scope.success = false;
            });
        }
    };
}]);