function mvAdmin($http, $q,firebase, $firebaseArray) {
	var storageService = firebase.storage();
    var ref = firebase.database().ref().child("product_images");
    var list = $firebaseArray(ref);

  return {
    createProduct: function(file,product){
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
				title: product.title,
				desc: product.description,
				price: product.price
			};
			
			 list.$add(imageData);
		});
			return uploadTask;
    },
    updateProduct: function(productToUpdate){
    	var productId = productToUpdate.$id;
    	var getData = firebase.database().ref().child("product_images/"+ productId);

    	var newProductInfo = {
    		title: productToUpdate.title,
	        desc: productToUpdate.desc,
	        price: productToUpdate.price
    	};
    	return getData.update(newProductInfo);
    }


  };

}
angular
  .module('app')
  .factory('mvAdmin', mvAdmin);