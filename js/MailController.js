angular.module('app')
    .controller('MailController', function ($scope, $location, $routeParams) {
        console.log("jha - figuring out routeParams");
        console.log($routeParams.id);
        $scope.mailId1 = $routeParams.id;
        if (!$routeParams.id) {
            $location.path('/');
        }
    });
