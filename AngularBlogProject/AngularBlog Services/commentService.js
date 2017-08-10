angular.module("AngularBlogCommentService", ["ngResource"])
    .factory("commentService", function ($resource) {
        return $resource("http://localhost:64190/api/comments/:Id", { Id: "@Id" });
    })