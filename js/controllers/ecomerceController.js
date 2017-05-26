angular.module('portfolioApp').controller('eSchopController', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.tests = [{
        title: "hoodie",
        imageMain: 'http://papini.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/greynavy_hoodie.jpg',
        imageAlt: 'http://shirts4sale.com/images/sweatshirt/21960/grey_gray_black_2color_hooded_sweatshirt_back.jpg',
        price: 10
    }];

    $scope.hoodies = [{
            title: "Gray Hoodie",
            imageMain: 'img/shop/hoodies/gray1.jpg',
            imageAlt: 'img/shop/hoodies/gray2.jpg',
            price: 10
        },
        {
            title: "Gradiant Hoodie",
            imageMain: 'img/shop/hoodies/hol_160345_01_model2.jpg',
            imageAlt: 'img/shop/hoodies/hol_160345_01_model3.jpg',
            price: 25
        },
        {
            title: "Stranger Things",
            imageMain: 'img/shop/hoodies/stranger_hoodie_darkheather.jpg',
            imageAlt: '',
            price: 25
        },
        {
            title: "Leather",
            imageMain: 'img/shop/hoodies/EL-SUM-PMC-BLU.jpg',
            imageAlt: '',
            price: 75
        }
    ];

    $scope.shirts = [{
            title: "Cat Love",
            imageMain: 'img/shop/shirts/cat1.jpg',
            imageAlt: 'img/shop/shirts/cat2.jpg',
            price: 10
        },
        {
            title: "9 and 3/4",
            imageMain: 'img/shop/shirts/934.jpg',
            imageAlt: '',
            price: 10
        },
        {
            title: "Geometric",
            imageMain: 'img/shop/shirts/shapes.jpg',
            imageAlt: '',
            price: 10
        },
        {
            title: "AIA",
            imageMain: 'img/shop/shirts/AIA.png',
            imageAlt: '',
            price: 10
        }

    ];

    $scope.shoes = [{
            title: "",
            imageMain: '',
            imageAlt: '',
            price: 50
        },
        {
            title: "",
            imageMain: '',
            imageAlt: '',
            price: 50
        },
        {
            title: "",
            imageMain: '',
            imageAlt: '',
            price: 50
        },
        {
            title: "",
            imageMain: '',
            imageAlt: '',
            price: 50
        }
    ];


    $scope.Cart = [];

    $scope.$on("NewItemInCart", function(e, obj) {
        $scope.Cart.push(obj);
    });
}]);