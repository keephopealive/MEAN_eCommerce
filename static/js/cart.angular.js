// FACTORY - CART
myAppObj.factory("CartFactory", [ '$http' , function($http){
	var cart = [];
	
	var factory = {
		add: function(product, callback){

			var found = false;
			for(index in cart){
				if ( cart[index].product.id == product.id ){
					found = true;
					cart[index].qty++;
					break;
				}
			}
			if(!found){ 
				cart.push({
					product: product, 
					qty: 1
				})
			}
			callback();

		},
		remove: function(product){		},
		update: function(product){		},
		index: function(callback){ 
			var total = 0;
			var cartSize = 0;
			for(index in cart){
				total += cart[index].product.price * cart[index].qty;
				cartSize += cart[index].qty;

			}					
			callback(cart, total, cartSize); 
		}
	};
	return factory;

}])

.controller("CartController", [ 'CartFactory', function(CartFactory){
	var _this = this;
	this.retrieveCart = function(){
		CartFactory.index(function(cart, total){
			_this.cart = cart;
			_this.grandtotal = total;
		});
	}();

}])