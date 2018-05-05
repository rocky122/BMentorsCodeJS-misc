app.controller('myCtrl',function($scope,myFactory){

    $scope.loadData = () => {
        var promise = myFactory.serverCall();

        promise.then(function(data){
            $scope.data = data;
        },function(err){
            $scope.error = err;
        })
    }
});