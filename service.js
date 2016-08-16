app.factory('dataEuro', function($http) {

    return {

        fetchData: function(data) {

           return $http.get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json');
        }

    }

});
