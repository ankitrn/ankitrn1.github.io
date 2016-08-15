app.controller('controller','teams' ,function($scope,$http){
       $http.get('data.json').success(function(data){

       		$scope.teamData = data;

       }).error(function(data){

            console.log("Team not found. Sorry!");
       });
   });