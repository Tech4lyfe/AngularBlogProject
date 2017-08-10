/// <reference path="C:\Github\AngularBlogProject\AngularBlogProject\Scripts/angular.min.js" />

var url = "http://localhost:64190/api/posts";
angular.module("app.controllers", ["app.directives"])
    .controller("postController",
        function($scope, $http, postService) {

            $scope.posts = postService.query();

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
            })
        }).controller("commentController",
        function($scope, $http, $routeParams) {

            var createdDate = new Date();
            createdDate.getTime();

            $http.get("http://localhost:64190/api/posts").then(function(response) {
                $scope.postId = response.data[$routeParams.id];
            });

            var commentPostUrl = "http://localhost:64190/api/comments";

            $scope.SendData = function(data) {

                var comment = {
                    Name: data.Name,
                    Description: data.Description,
                    CreatedDate: createdDate,
                    PostId: $scope.postId.PostId
                };

                $http.post(commentPostUrl, comment)
                    .then(function(response) {
                        $scope.value = response;
                    })
                    .error(function(error) {
                        alert(error);
                    });
            }

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
        function($scope) {


            $scope.myposts = [
                {
                    name: "TJ Mcallister",
                    title: "Gone With The Wind",
                    content:
                        "Adipisicing culpa ad ut exercitation ut sit proident exercitation irure tempor sit reprehenderit occaecat. Magna quis sint cupidatat est amet consequat culpa do mollit proident voluptate dolor. Consequat fugiat esse in sint irure nostrud. Nisi consequat voluptate elit labore. Pariatur magna ullamco aliqua reprehenderit ut magna non officia irure ad ex. Id irure labore nulla labore exercitation. Qui reprehenderit laborum occaecat laboris ex nisi eiusmod non eu commodo adipisicing non."
                },
                {
                    name: "TJ Mcallister",
                    title: "The Fire Is Gone",
                    content:
                        "Consequat anim proident aliqua sit in. Quis Lorem id proident adipisicing sunt velit ullamco nostrud sunt. Irure nostrud laborum eiusmod esse incididunt amet irure ullamco mollit aliqua eiusmod consectetur anim. Tempor consequat aute pariatur proiden"
                },
                {
                    name: "TJ Mcallister",
                    title: "Life In The Fast Lane",
                    content:
                        "Nisi nulla incididunt Lorem fugiat laborum eu do. Dolor commodo irure dolore in amet ipsum sit anim non ex labore amet aute. Ut nostrud est in anim consectetur nostrud anim mollit quis"
                }
            ];
            $scope.newPost = function() {

                $scope.myposts.push({
                    name: $scope.name,
                    title: $scope.title,
                    content: $scope.content
                });
                $scope.title = "";
                $scope.name = "";
                return $scope.content = "";
            };
        });


