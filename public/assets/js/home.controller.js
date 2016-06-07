/**
 * Main Controller
 * @author  thomasmundt
 * @Created on 25.05.16.
 */

app.controller('homeCtrl', ['$scope', '$rootScope','$http',
    function($scope,$rootScope,$http) {
        console.log('homeCtrl() started');
        $scope.upload = function() {
            console.log('homeCtrl(), file is: ' + $scope.file);
        };


    }]);
