  function config($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider){
    // var window = $windowProvider.$get();
    //       window.Stripe.setPublishableKey('pk_test_3RgM86055Ho32SA6cbslikhr');
 // $locationProvider.hashPrefix('');

    // $routeProvider
    //     .when('/',{
    //        templateUrl : "/partials/views/main.html",
    //        controller : "MainController"
    //     })
    //     .when('/blog',{
    //        templateUrl : "/partials/views/blog.html"
    //     })
    //      .when('/about',{
    //       templateUrl : "/partials/views/about.html"
    //     })
    //     .when('/shop', { 
    //         templateUrl: '/partials/views/store.html',
    //         controller: "ShopController" 
    //       })
    //     .when('/cart', { 
    //         templateUrl: '/partials/views/cart.html',
    //         controller: "ShopController" 
    //       })
    //     .when('/product/:id', { 
    //         templateUrl: '/partials/views/product.html',
    //         controller: "ProductController" 
    //       })
    //     .when('/charge', { 
    //         templateUrl: '/partials/views/cart.html',
    //         controller: "ShopController" 
    //       })
    //      .when('/admin',{
    //       templateUrl : "/partials/admin/admin.login.html"
    //     }) 
    //     .when('/adminConsole/',{
    //       templateUrl : "/partials/admin/admin.console.html"
    //     })
    //     .otherwise({
    //       redirectTo: '/'
    //     });

      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/partials/views/main.html',
            controller: 'MainController'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: '/partials/views/blog.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/partials/views/about.html'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: '/partials/views/store.html',
            controller: 'ShopController'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: '/partials/views/cart.html',
            controller:"ShopController"
        })
        .state('productDetail', {
            url: '/product/:id',
            templateUrl: '/partials/views/product.html',
            controller: 'ProductController'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/partials/admin/admin.login.html'
        })
        .state('adminConsole', {
            url: '/adminConsole',
            templateUrl: '/partials/admin/admin.console.html'
        })
        .state('adminConsole.blog',{
            url:'/blog',
            templateUrl:'/partials/admin/components/admin.postBlog.html'
        })
        .state('adminConsole.product',{
            url:'/product',
            templateUrl:'/partials/admin/components/admin.addProduct.html'
        })

        .state('checkoutForm', {
            url: '/checkout',
            templateUrl: '/partials/components/checkout/checkoutForm.html',
            controller: 'ShopController'
        })
        //  .state('checkoutForm.login', {
        //     url: '/login',
        //     templateUrl: '/partials/components/checkout/loginForm.html'
        // })        
         .state('checkoutForm.customer', {
            url: '/customer',
            templateUrl: '/partials/components/checkout/customerForm.html'
        })
        
        // url will be /form/interests
        .state('checkoutForm.shipping', {
            url: '/shipping',
            templateUrl: '/partials/components/checkout/shippingForm.html'
        })
        
        // url will be /form/payment
        .state('checkoutForm.payment', {
            url: '/payment',
            templateUrl: '/partials/components/checkout/paymentForm.html'
        });
        
    // catch all route
    // send users to the form page 
    // $urlRouterProvider.otherwise('/checkout/customer');
    $urlRouterProvider.otherwise('/home');
  }



angular
  .module('app',['ngRoute','firebase','ngCart','ngAnimate', 'ui.router'])
  .config(config);
  // .run(run);

