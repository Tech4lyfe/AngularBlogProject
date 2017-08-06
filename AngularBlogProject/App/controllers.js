/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.min.js" />
angular.module("app.controllers", ["app.directives"])
       .controller("postController", function ($scope, $http) {

           $http.get("data/post.json").then(function (response) {
               $scope.posts = response.data
           })

       }).controller("singlePostController", function ($scope, $http, $routeParams) {
           $http.get("data/post.json").then(function (response) {
               $scope.post = response.data[$routeParams.id];
           })
       }).controller("pageController", function ($scope, $http, $routeParams) {


           $http.get("data/pages.json").then(function (response) {
               $scope.page = response.data[$routeParams.id];
           })
       }).controller("commentController", function ($scope) {

           $scope.submit = function () {
               $scope.comments = [];
               $scope.comments.push({
                   name: $scope.name,
                   text: $scope.text
               });
               $scope.name = "";
               return $scope.text = "";
           };
           return $scope.drop = function (comment) {
               return $scope.comments.splice($scope.comments.indexOf(comment), 1);
           };
         
       })


