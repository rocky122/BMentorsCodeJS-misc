app.controller('myController',($scope,myService) => {


    $scope.addToCart = (id) => {
        console.log('ID is',id);
    }

    $scope.like = id => {
        var object = itemOperations.search(id);
        itemOperations.update(object);
        $scope.results = itemOperations.getItems();

    }
    var promise = myService.obj.talkToServer($scope);
    promise.then(function(data) {
        $scope.result = data;
        itemOperations.prepareItems($scope.result);
    },function(err) {$scope.error = err});


})