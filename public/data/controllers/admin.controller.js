function AdminController(firebase, $location, $scope, $firebaseArray) {
	var auth = firebase.auth();
	$scope.pTitle=[];
	$scope.pDescription=[];
	$scope.pPrice=[];
	$scope.uTitle=[];
	$scope.uDescription=[];
	$scope.uPrice=[];
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
  		uploadImage(file);
  	};
  	
  	function uploadImage(file) {
      var random = parseInt(Math.random() * 1000000);
      var refStorage = storageService.ref('product_images').child(random.toString()).child(file.name);
      var uploadTask = refStorage.put(file);

		uploadTask.on('state_changed', null, function(error){
			console.log('upload error', error);
		}, function() {
			var imageData = {
				url: uploadTask.snapshot.downloadURL,
				bytes: uploadTask.snapshot.totalBytes,
				name: uploadTask.h.name,
				path: uploadTask.h.fullPath,
				date: uploadTask.h.timeCreated,
				title: $scope.pTitle,
				desc: $scope.pDescription,
				price: $scope.pPrice
			};

			console.log("imageData:",imageData);

			list.$add(imageData).then(function(ref) {
				$scope.pTitle= '';
				$scope.pDescription='';
				file = '';
				swal("Success", "Your image has been upload", "success");
			});
		});
    }


    function editProduct(id){
    	var productInfo = list.$getRecord(id);
    	$scope.productToUpdate= productInfo;

    	$('#editModal').modal(); 
    }

    function updateProduct() {
    	var productId = $scope.productToUpdate.$id;
    	var getData = firebase.database().ref().child("product_images/"+ productId);

    	var newProductInfo = {
    		title: $scope.productToUpdate.title,
	        desc: $scope.productToUpdate.desc,
	        price: $scope.productToUpdate.price
    	};
    	getData.update(newProductInfo).then(function(ref){
    		$('#editModal').modal('hide');
    		swal("Edited!", "Your product information has been updated.", "success");
    	}).catch(function(error) {
          console.log('an error occurred!', error);
        });
    	
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
 		auth.signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
 			 $location.path( "/adminConsole" ).replace();
 			 $scope.$apply();
		}).catch(function(error) {
  			console.error("Authentication failed:", error);
  			 $location.path( "/admin" );
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

AdminController.$inject = ['firebase','$location','$scope', '$firebaseArray'];

angular
	.module('app')
	.controller('AdminController', AdminController);