var app = angular.module('directives', []);

app.directive('myDirective', function () {
    return {
        restrict: 'MEAC',
        replace: true,
        template: '<a href="http://www.google.com">Click me to go to Google</a>'
    }
});
