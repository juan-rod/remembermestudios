function ShopController($scope, $routeParams, firebase, $firebaseArray, ngCart, mvPayment) {

  this.productModal = productModal;
  $scope.store=[];
  $scope.productInfo = [];
  $scope.totalCost = [];

  var ref = firebase.database().ref().child("product_images");
  $scope.store = $firebaseArray(ref);
  
  $scope.formData = {};
  $scope.formData.country= 'United States';
  var user = firebase.auth().currentUser;

 var totalItems = ngCart.getTotalItems();
 $scope.shipping = ngCart.getShipping();
 $scope.getCart = ngCart.getCart().items;

  $scope.totalCost = ngCart.totalCost();
  $scope.counter = 0;
      $scope.checkIfUser=function(email){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            } else {
              // No user is signed in.
              console.log("no user signed in:",user);
            }
        });
      }
    $scope.createAccount = function(email,password){
      console.log("email,password:",email,password);
    }

    $scope.login = function(){
      swal("Oops!", "Purchase options are coming soon!", "success");
    }

    $scope.submitPayment = function(e){
      var $form = {
        cvc: $('#card-cvc').val(),
        number: $('#card-number').val(),
        exp_month:$('#card-exp-month').val(),
        exp_year: $('#card-exp-year').val(),
        name: $scope.formData.fname +' '+ $scope.formData.lname,
        address_line1:$scope.formData.address,
        address_line2:$scope.formData.address_line2,
        address_city:$scope.formData.city,
        address_state:$scope.formData.state,
        address_country:$scope.formData.country,
        address_zip: $scope.formData.zip

      }
      var userInfo = {
        fname: $scope.formData.fname,
        lname: $scope.formData.lname,
        address_line1:$scope.formData.address,
        // address_line2:$scope.formData.address_line2,
        address_city:$scope.formData.city,
        address_state:$scope.formData.state,
        address_country:$scope.formData.country,
        address_zip: $scope.formData.zip,
        phone: $scope.formData.phone
      }

      saveShippingInfo(userInfo);
 

        // var $form = $('#payment-form');
        $('.payment-errors').addClass('hidden');

        // Request a token from Stripe:
      Stripe.card.createToken($form, stripeResponseHandler);

      // Prevent the form from being submitted:
      return false;
    }

    function saveShippingInfo(userInfo){
      var newPostKey = firebase.database().ref().child('user-items').push().key;
      var updates = {};
      userInfo.id = newPostKey;
      updates['/user-items/' + newPostKey] = userInfo;
      
     
      return firebase.database().ref().update(updates);
    }

    function stripeResponseHandler(status, response) {
      // Grab the form:
      var $form = $('#payment-form');

      if (response.error) { // Problem!

        // Show the errors on the form:
        $('.payment-errors').text(response.error.message);
        $('.payment-errors').removeClass('hidden');
        $form.find('.submit').prop('disabled', false); // Re-enable submission

      } else { // Token was created!
        swal("Order is being processed", "Look for a confirmation email!", "success");
       // Get the token ID:
        var token = response.id;
       
        // mvPayment.processPayment(response).then(function(success){
        //   console.log("success:", success);
        // });

        //Insert the token ID into the form so it gets submitted to the server:
       $form.append($('<input type="hidden" name="stripeToken">').val(token));

        // Submit the form:
        $form.get(0).submit();
        // $form.val('');
        // return false;

      }
        ngCart.empty();
    };
    // ngCart.setTaxRate(7.5);
    ngCart.setShipping(4.99);   







}
ShopController.$inject=['$scope', '$routeParams','firebase','$firebaseArray','ngCart', 'mvPayment'];
angular
	.module('app')
	.controller('ShopController', ShopController);