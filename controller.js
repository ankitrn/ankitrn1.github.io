app.controller('controller', ['$scope','fetch', function($scope,fetch) {
    fetch.success(function(data) {

        $scope.teamData = data;
    });
}]);