app.controller('myController',function($scope,myFactory){

    $scope.showName = function(){
        var result = myFactory.initCap($scope.firstname);
        $scope.resultname = result;
    }
    $scope.sayHello = function(){
        var result = myFactory.returnHello();
        $scope.resultName = result;
    } 




});