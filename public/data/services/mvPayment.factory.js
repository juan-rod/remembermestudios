function mvPayment($http, $q) {

	function processPayment(data) {
		var dfd = $q.defer();
		console.log('data in factory:', data);
		var newData = $.param({
            json: JSON.stringify({
                token: data.id,
				cardId: data.card.id,
				last4: data.card.last4,
				month: data.card.exp_month,
				year:data.card.exp_year
            })
        });
		console.log("newData:",newData);
		
			$http.post('/charge',newData)
			.then(function(response){
				console.log("response:",response);
				if(response.data.success) {
					dfd.resolve(true);
				console.log("success:");
				} else {
					dfd.resolve(false);
				console.log("fail:");
				}
			});
			return dfd.promise;
	}


  return {
    processPayment: processPayment
  };

}
angular
  .module('app')
  .factory('mvPayment', mvPayment);