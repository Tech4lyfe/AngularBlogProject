angular.module("AngularBlogCommentService", ["ngResource"])
    .factory("commentService", function ($resource) {

        var service = {
            deletecomment: removeComment

        };
        return service;
         function removeComment(commentId) {
            var removeEndpoint = $resource("http://localhost:64190/api/comments/:Id", { Id: "@Id" });
            var remove = removeEndpoint.delete({ id: commentId });
            return remove;
        }
    })