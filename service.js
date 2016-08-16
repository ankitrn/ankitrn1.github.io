app.factory('dataEuro', function($http) {

    return {

        fetchData: function(data) {

            $http.get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json');
        }

    }

});