app.controller('controller',['$scope','dataEuro',function($scope,dataEuro){
    
    controller.fetchData().then(
        
        function(returned){
        
        $scope.dataEuro = returned.data;
    },
        
        function(err){
            
            console.log('not found!');
        };
    );
    
}]);