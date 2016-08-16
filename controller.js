app.controller('controller',['$scope','dataEuro',function($scope,dataEuro){
    
    dataEuro.fetchData().then(
        
        function(returned){
        
        $scope.dataEuro = returned.data;
    },
        
        function(err){
            
            console.log('not found!');
        };
    );
    
}]);
