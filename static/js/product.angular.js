
myAppObj.factory("ProductFactory", [ '$http' , function($http){
	// Temp Products Array
	var products = [
		{ id: 1, title: "First Product", description: "This thing is badass...", price: 9001.99 },
		{ id: 2, title: "Second Product", description: "This thing very badass...", price: 9001.99 },
		{ id: 3, title: "Third Product", description: "This thing super badass...", price: 9001.99 }, 
		{ id: 4, title: "Fourth Product", description: "This thing absolutely badass...", price: 9001.99 },
		{ id: 5, title: "Fifth Product", description: "This thing is badass...", price: 9001.99 },
		{ id: 6, title: "Sixth Product", description: "This thing very badass...", price: 9001.99 },
		{ id: 7, title: "Seventh Product", description: "This thing super badass...", price: 9001.99 }, 
		{ id: 8, title: "Eighth Product", description: "This thing absolutely badass...", price: 9001.99 }
	]

	var factory = {
		index: function(callback){
			callback(products);
		},
		currentPage: 0
	};
	return factory;

}])

.controller("ProductsController", [ 'ProductFactory', 'CartFactory' , function(ProductFactory, CartFactory){
    
 	this.currentPageDecrement = function(){
 		_this.currentPage--;
 		ProductFactory.currentPage = _this.currentPage;
 	}
 	this.currentPageIncrement = function(){
 		_this.currentPage++;
 		ProductFactory.currentPage = _this.currentPage;
 	}


	var _this = this;
	ProductFactory.index(function(products){
		_this.products = products;
		_this.currentPage = ProductFactory.currentPage;
		// _this.currentPage = 0;
    	_this.pageSize = 6;
    	_this.numberOfPages = function() {
        return Math.ceil(_this.products.length / _this.pageSize);
    }
	});
	function retrieveCart(){
		CartFactory.index(function(cart, total, cartSize){
			console.log("PRODUCT CONTROLLER TOTAL ", total);
			_this.cart = cart;
			_this.grandtotal = total;
			_this.cartSize = cartSize;
		})
	}
	retrieveCart();
	this.addToCart = function(product){
		CartFactory.add(product, function(){ 
			retrieveCart();
		})
	}

}])

.directive("productBlock", function(){
	return {
		restrict: "E",
		templateUrl: "/templates/productBlock.template.html",
	}
})
