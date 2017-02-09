function mvAdmin($http, $q,firebase, $firebaseArray) {
	var storageService = firebase.storage();
    var ref = firebase.database().ref().child("product_images");
    var list = $firebaseArray(ref);
    var uploadTaskURL = [];
    var img_URL = []

  return {
    createProduct: function(file,product){
    	var random = parseInt(Math.random() * 1000000);
    	var randomString = random.toString();
		var refStorage = storageService.ref('product_images').child(randomString);
	    	for (var i = 0; i < file.length; i++) {
	        	var imageFile = file[i];

				var uploadTask = refStorage.child(imageFile.name).put(imageFile);
					uploadTaskURL.push(uploadTask);
	   		 }

			uploadTask.on('state_changed', null, function(error){
				// console.log('upload error', error);
			}, function() {
				for (var i = 0; i < uploadTaskURL.length; i++) {
					var imgURL = uploadTaskURL[i];
					img_URL.push(imgURL.snapshot.downloadURL);
				}
				// console.log("img_URL[0]:",img_URL[0]);
				// console.log("img_URL[1]:",img_URL[1]);
				// console.log("img_URL[2]:",img_URL[2]);
				// console.log("img_URL[3]:",img_URL[3]);
				var imageData = {
					url: uploadTask.snapshot.downloadURL,
					url1: img_URL[0],
					url2: img_URL[1],
					url3: img_URL[2],
					url4: img_URL[3],
					bytes: uploadTask.snapshot.totalBytes,
					name: uploadTask.h.name,
					path: uploadTask.h.fullPath,
					date: uploadTask.h.timeCreated,
					title: product.title,
					desc: product.description,
					price: product.price,
					childPath: randomString
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