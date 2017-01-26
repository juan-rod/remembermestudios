function AdminController(firebase, $location, $scope, $firebaseArray, $state, $stateParams, mvAdmin) {
	var auth = firebase.auth();

	$scope.product = {};
	$scope.productToUpdate = {};
	
	var storageService = firebase.storage();
    var ref = firebase.database().ref().child("product_images");
    var list = $firebaseArray(ref);
    this.images = list;
    this.deleteImg = deleteImg;
    this.editProduct = editProduct;
    this.updateProduct = updateProduct;

    
    this.image = function(event){
  		event.preventDefault();
    	var file = event.target.files[0];
  		// uploadImage(file);
  		mvAdmin.createImg(file,$scope.product).then(function(ref){
  			$scope.product.title= '';
			$scope.product.description='';
			$scope.product.price='';
			file = '';
			swal("Success", "Your image has been upload", "success");
  		});
  	};
  	
   	function editProduct(id){
    	var productInfo = list.$getRecord(id);
    	$scope.productToUpdate= productInfo;

    	$('#editModal').modal(); 
    }

    function updateProduct() {
    	mvAdmin.updateProduct($scope.productToUpdate).then(function(ref){
    		$('#editModal').modal('hide');
    		swal("Edited!", "Your product information has been updated.", "success");
    	}).catch(function(error) {
          console.log('an error occurred!', error);
    	})
    }

    function deleteImg(id) {
      var image = list.$getRecord(id);
          	console.log("image", image);

      swal({
        title: "Are you sure?",
        text: "Do you want to remove this image?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        var imgRef = storageService.ref(image.path);

        imgRef.delete().then(function() {
          list.$remove(image).then(function(ref) {
            swal("Deleted!", "Your image has been deleted.", "success");
          });
        }).catch(function(error) {
          console.log('an error occurred!', error);
        });
      });

    }

	this.signIn =function(email,password){	
		console.log("hello from signin:", $state);
		console.log("hello from email/password:", email,password);
 		auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
 			 // $location.path( "/adminConsole" ).replace();
 			 // $state.go('.adminConsole', $stateParams, {reload: true, inherit: false});
 			 $state.go('.adminConsole' );
 			 $scope.$apply();
		}).catch(function(error) {
  			console.error("Authentication failed:", error);
  			$state.go('/adminConsole' );
  			 // $location.path( "/admin" );
		});
 	};

 	

	this.postIt = function(title,blogPost){
		var postData = {
			title: title,
			date: todaysDate(),
			post: blogPost
		};
		console.log("postData:",postData);
		var newPostKey = firebase.database().ref().child('blog').push().key;
		var updates = {};
		postData.id = newPostKey;
	  	updates['/blog-posts/' + newPostKey] = postData;
	  	
	  	this.blogPost = '';
	  	this.title = '';
	  	return firebase.database().ref().update(updates);

	};

	function todaysDate(){
		var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
		var d = new Date(),
			date = d.getDate(),
			year = d.getFullYear(),
			month = d.getMonth(),
			newMonth= monthNames[month];
		var today =  newMonth + ' ' + date + ', ' + year;

		return today;
	}

 

}

AdminController.$inject = ['firebase','$location','$scope', '$firebaseArray', '$state', '$stateParams', 'mvAdmin'];

angular
	.module('app')
	.controller('AdminController', AdminController);