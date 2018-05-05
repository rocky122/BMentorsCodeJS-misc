app.factory('myFactory',function($http,$q,URL){

    var factoryObject = {
        serverCall() {
            var defer = $q.defer();
            $http.get(URL).then(function(response){
                defer.resolve(response);
            },function(err){
                defer.reject(err);
                console.log('FAIL',err);
            });
            return defer.promise;
        }
    }
    return object;
});