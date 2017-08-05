/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.min.js" />
angular.module("app.controllers", ["app.directives"])
       .controller("postController", function ($scope, $http) {

           $http.get("data/post.json").then(function (response) {
               $scope.posts = response.data
           })

       }).controller("singlePostController", function ($scope,$http,$routeParams) {
           $http.get("data/post.json") .then(function (response) {
               $scope.post = response.data[$routeParams.id];
           })
       }).controller("pageController", function ($scope,$http,$routeParams) {
          

           $http.get("data/pages.json").then(function (response) {
               $scope.page = response.data[$routeParams.id];
           })
       })


