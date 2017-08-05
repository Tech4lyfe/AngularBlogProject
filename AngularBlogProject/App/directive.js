/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.min.js" />
angular.module("app.directives", [])
        .directive("navigationbar", function () {
            return {
                // name: '',
                // priority: 1,
                // terminal: true,
                // scope: {}, // {} = isolate, true = child, false/undefined = no change
                controller: function ($scope, $http,$sce) {

                    $scope.getPageUrl = function (page) {
                       
                        return $sce.trustAsHtml(decodeURIComponent("#/page/" + $scope.pages.indexOf(page)));
                         
                    };

                    $scope.num = 5;

                    $http.get("data/pages.json").then(function (response) {
                        $scope.pages = response.data
                    });
                },
                // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
                restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
                 templateUrl:  'partials/navigationbar.html',
                replace: true,
                // transclude: true,
                // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            };
        })