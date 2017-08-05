var myapp = angular.module("myApp", ["ngRoute","app.controllers"]);
myapp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/",
    {
        templateUrl: "Views/post.html",
        controller:"postController"

    }).when("/post/:id",
    {
        templateUrl: "Views/singlepost.html",
        controller:"singlePostController"

    }).when("/page/:id",
    {
        templateUrl: "Views/page.html",
        controller: "pageController"
            
    }).otherwise({
        redirectTo: "/"
    })
   
});