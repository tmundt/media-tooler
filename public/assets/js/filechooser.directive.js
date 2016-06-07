/**
*
*
**/
app.directive('fileChooser', ['$parse', function ($parse) {
    return {
    	require:"ngModel",
        restrict: 'A,E',
        link: function($scope, element, attrs, ngModel) {
            //var model = $parse(attrs.fileData);
            //var modelSetter = model.assign;
        	element.bind('change', function (event) {
                ngModel.$setViewValue(event.target.files[0]);
                $scope.$apply();
            });

            $scope.$watch(function () {
                return ngModel.$viewValue;
            }, function (value) {
                if (!value) {
                    element.val("");
                }
            });
        }
    };
    
}]);