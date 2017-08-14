/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.js" />
angular.module("AngularBlogPostService", ["ngResource"])
        .factory("postService", function ($resource) {
        var service = {
            deletepost: removePost,
            retrieveposts:getPosts

        };
        return service;
            function removePost(postId) {
                var deleteEndpoint = $resource("http://localhost:64190/api/posts/:Id", { Id: "@Id" });
                var remove = deleteEndpoint.delete({id: postId});
                return remove;
            };

            function getPosts() {
                var postEndpoint = $resource("http://localhost:64190/api/posts");
                var posts = postEndpoint;
                return posts;
            }


    })