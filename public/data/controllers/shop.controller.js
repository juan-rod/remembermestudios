function ShopController($scope, $routeParams, firebase, $firebaseArray, ngCart, mvPayment) {

  this.productModal = productModal;
  $scope.store=[];
  $scope.productInfo = [];
  $scope.totalCost = [];

  var ref = firebase.database().ref().child("product_images");
  $scope.store = $firebaseArray(ref);

    // function productModal(id){
    //   console.log("id:", id);
      // var record = $scope.store.$getRecord(id);
      // console.log("productDetail:", $scope.productDetail);
      // return $scope.productDetail.push(record);
      // for (var i = 0; i < $scope.store.length; i++) {
      // console.log("$scope.store[i]:", $scope.store[i].$id);

      // if ($scope.store[i].$id == id)
      //     return $scope.store[i];
      // }
      // console.log("$scope.productDetail:", $scope.productDetail);
      // return null;


       
      // console.log("ProductPage", $scope.productPage);
      // console.log("productInfo title", $scope.productModal.title);
      // console.log("productInfo id", $scope.productModal.$id);

      // $('#productModal').modal(); 
     
    // }

    $scope.checkout = function(){

      var totalItems = ngCart.getTotalItems();
      $scope.totalCost = ngCart.totalCost();
      swal("Oops!", "Purchase options are coming soon!", "warning");
      // $('#checkoutModal').modal(); 
    }

    $scope.submitPayment = function(e){
      var $form = $('#payment-form');
        $('.payment-errors').addClass('hidden');
        // Request a token from Stripe:
      Stripe.card.createToken($form, stripeResponseHandler);

      // Prevent the form from being submitted:
      return false;
    }

    function stripeResponseHandler(status, response) {
      // Grab the form:
      var $form = $('#payment-form');
      console.log("$form:",$form);
      console.log("status:",status);
      console.log("response:",response);

      if (response.error) { // Problem!

        // Show the errors on the form:
        $('.payment-errors').text(response.error.message);
        $('.payment-errors').removeClass('hidden');
        $form.find('.submit').prop('disabled', false); // Re-enable submission

      } else { // Token was created!

       // Get the token ID:
        var token = response.id;
        console.log("token in stripeResponseHandler:", token);
       
        // mvPayment.processPayment(response).then(function(success){
        //   console.log("success:", success);
        // });

        //Insert the token ID into the form so it gets submitted to the server:
       $form.append($('<input type="hidden" name="stripeToken">').val(token));

        // Submit the form:
        $form.get(0).submit();

      }
        ngCart.empty();
    };
    // ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);   







}
ShopController.$inject=['$scope', '$routeParams','firebase','$firebaseArray','ngCart', 'mvPayment'];
angular
	.module('app')
	.controller('ShopController', ShopController);