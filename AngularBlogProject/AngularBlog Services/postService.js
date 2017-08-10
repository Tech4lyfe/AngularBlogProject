/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.js" />
angular.module("AngularBlogPostService", ["ngResource"])
        .factory("postService",function($resource) {
        return $resource("http://localhost:64190/api/posts/:Id", { Id: "@Id" });
    })