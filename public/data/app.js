  function config($routeProvider, $windowProvider,$locationProvider){
    // var window = $windowProvider.$get();
    //       window.Stripe.setPublishableKey('pk_test_3RgM86055Ho32SA6cbslikhr');
 $locationProvider.hashPrefix('');

    $routeProvider
        .when('/',{
           templateUrl : "/partials/views/main.html",
           controller : "MainController"
        })
        .when('/blog',{
           templateUrl : "/partials/views/blog.html"
        })
         .when('/about',{
          templateUrl : "/partials/views/about.html"
        })
        .when('/shop', { 
            templateUrl: '/partials/views/store.html',
            controller: "ShopController" 
          })
        .when('/cart', { 
            templateUrl: '/partials/views/cart.html',
            controller: "ShopController" 
          })
        .when('/product/:id', { 
            templateUrl: '/partials/views/product.html',
            controller: "ProductController" 
          })
        .when('/charge', { 
            templateUrl: '/partials/views/cart.html',
            controller: "ShopController" 
          })
         .when('/admin',{
          templateUrl : "/partials/admin/admin.login.html"
        }) 
        .when('/adminConsole/',{
          templateUrl : "/partials/admin/admin.console.html"
        })
        .otherwise({
          redirectTo: '/'
        });
  }
  // function run($window){
    

  // }


angular
  .module('app',['ngRoute','firebase','ngCart'])
  .config(config);
  // .run(run);

