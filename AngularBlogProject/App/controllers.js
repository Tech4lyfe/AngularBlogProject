/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.min.js" />

var url = "http://localhost:64190/api/posts";
var commentPostUrl = "http://localhost:64190/api/comments";


angular.module("app.controllers", ["app.directives"])
    .controller("postController",
        function($scope, $http) {

            $http.get(url).then(function(response) {
                $scope.posts = response.data;
            });

        }).controller("singlePostController",
        function($scope, $http, $routeParams) {
            var onSuccess = function(response) { $scope.post = response.data[$routeParams.id] }
            var onFailure = function(reason) { $scope.error = reason }
            var getSinglePost = function() {
                $http.get(url).then(onSuccess, onFailure);
            };
            getSinglePost();

        }).controller("pageController",
        function($scope, $http, $routeParams) {

            $http.get("data/pages.json").then(function(response) {
                $scope.page = response.data[$routeParams.id];
            });
        }).controller("commentController",
        function($scope, $http, $routeParams, commentService) {
            $scope.comments = [];
            var createdDate = new Date();
            createdDate.getTime();

            $http.get(commentPostUrl).then(function(response) {
                $scope.comments = response.data;
            });

            $http.get(url).then(function(response) {
                $scope.post = response.data[$routeParams.id];
            });

            var reset = function() {
                $scope.comment = {};
                $scope.commentForm.commentName.$touched = false;
                $scope.commentform.comment.$touched = false;
            };


            $scope.SendData = function(data) {

                var comment = {
                    Name: data.Name,
                    Description: data.Description,
                    CreatedDate: createdDate,
                    PostId: $scope.post.PostId
                };

                $http({
                    method: "POST",
                    url: commentPostUrl,
                    data: comment
                }).then(function(response) {

                    var newComment = response.data;
                    $scope.comments.unshift(newComment);
                    reset();
                });

            }

            $scope.deleteComment = function(comment, index) {
                commentService.deletecomment(comment.CommentId).$promise.then(function(result) {
                    $scope.comments.splice(index, 1);
                });

            };

        }).controller("aboutPageController",
        function($scope) {
            $scope.Title = "About";
        }).controller("contactPageController",
        function($scope) {
            $scope.Title = "Contact";

            $scope.submit = function(contactForm) {
                if (contactForm.$valid) {
                    alert("Message has been sent successfully");
                };
            }
        }).controller("newPostController",
        function($scope, $http, postService, $routeParams) {
            $scope.posts = [];

            $http.get(url).then(function(response) {
                $scope.posts = response.data;
            });

            var reset = function() {
                $scope.post = {};
                $scope.postform.postname.$touched = false;
                $scope.postform.posttitle.$touched = false;
                $scope.postform.content.$touched = false;
            };

            $http.get(url).then(function(response) {
                $scope.postId = response.data[$routeParams.id];

            });

            var createdDate = new Date();
            createdDate.getDate();

            $scope.addPost = function(data) {

                var post = {
                    Content: data.Content,
                    Title: data.Title,
                    Author: data.Author,
                    CreatedDate: createdDate

                };

                $http.post(url, post)
                    .then(function(response) {
                        var newPost = response.data;
                        $scope.posts.unshift(newPost);
                        reset();
                    });

            }

            $scope.deletePost = function(post, index) {
                postService.deletepost(post.PostId).$promise.then(function(result) {
                    $scope.posts.splice(index, 1);
                });

            };

        })


