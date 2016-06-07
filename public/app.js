/**
 * Main app file for bootstrapping AngularJS
 * @author thomasmundt
 * @created on 25.05.16.
 */

var appName = 'media-tools';
var app = angular.module(appName, ['ui.bootstrap', 'toastr']);
angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});
