angular.module('portfolioApp').factory('ShopService', function() {

    var _cart = [];

    var _set_cart = function(newCart) {
        _cart = newCart;
    }

    var _get_cart = function() {
        return _cart;
    }

    var _add_to_cart = function(item) {
        _cart.push(item);
    }

    //public access
    return {
        GetCart: _get_cart,
        SetCart: _set_cart,
        AddToCart: _add_to_cart
    }
})