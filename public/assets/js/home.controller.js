/**
 * Main Controller
 * @author  thomasmundt
 * @Created on 25.05.16.
 */

app.controller('homeCtrl', ['$scope', '$rootScope','$http', 'Upload',
    function($scope,$rootScope,$http,Upload) {
        console.log('homeCtrl() started');
        $scope.uploadSuccessfull = false;
        $scope.uploadPath = "";
        

        // upload on file select or drop
        $scope.upload = function (file) {
            console.log("$scope.upload(), file: ");
            console.log(file);
            // Upload.upload({
            //     url: 'upload/url',
            //     data: {file: file, 'username': $scope.username}
            // }).then(function (resp) {
            //     console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            // }, function (resp) {
            //     console.log('Error status: ' + resp.status);
            // }, function (evt) {
            //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            // });
            var data = 'Test';
            Upload.upload({
                url: 'api/upload',
                method: 'POST',
                data: {file: file}, // Any data needed to be submitted along with the files
                files: file
            }).then(function(response) {
                console.log('Success, response is: ');
                console.info(response.data);
                $scope.uploadPath = response.data;
                $scope.uploadSuccessfull = true;
            }, function(error) {
                console.log('error: ' + error.status);
            }, function(evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)
            });
        };
        $scope.convertImageToVideo = function() {
            console.log('homeCtrl(), file name is: ');
            console.log($scope.picFile.name);
            //var path =  (window.URL || window.webkitURL).createObjectURL($scope.imageFile);

            // Test: overwrite path
            if(!$scope.uploadPath) {
                alert('No image uploaded!');
                return;
            }
            //var url = $scope.uploadPath;
            var url = {
                "url" : $scope.uploadPath,
                "name" : $scope.picFile.name
            };

            $http.post("/api/convert", url).then(function(response) {
            	console.log("Status: " + response.status);
            	console.log("Received data: " + response.data);
            },
            function(error) {
            	console.warn('Server error: ');
            	console.warn(error);
                console.warn('Error, config Object: ');
                console.warn(error.config);
            });
        };
        $scope.uploadFile = function(){

            $scope.fileSelected = function(files) {
                if (files && files.length) {
                    $scope.file = files[0];
                }

                Upload.upload({
                    url: "/api/upload",
                    file: $scope.file
                })
                    .success(function(data) {
                        console.log(data, 'uploaded');
                    });

            };
        };
    //});




    }]);
