/**
 * Main Controller
 * @author  thomasmundt
 * @Created on 25.05.16.
 */

app.controller('homeCtrl', ['$scope', '$rootScope','$http',
    function($scope,$rootScope,$http) {
        console.log('homeCtrl() started');
        $scope.convertImageToVideo = function() {
            console.log('homeCtrl(), file is: ');
            console.log($scope.imageFile);
            $http.post('/imageToVideo', $scope.imageFile)
            .then(function(response) {
            	console.log("Status: " + response.status);
            	console.log("Received data: " + response.data);
            },
            function(error) {
            	console.warn('Server error: ' + error);
            });
        };


    }]);
