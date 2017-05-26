angular.module('portfolioApp').controller('eSchopController', ['$scope', function($scope) {

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
            title: "Gray T-Shirt",
            imageMain: 'http://www.haneslocator.com/wp-content/uploads/2013/12/Hanes_CB_ecoSmart_5170_SmokeGray_Front1.jpg',
            imageAlt: 'http://www.haneslocator.com/wp-content/uploads/2013/11/Hanes_nanoT_4980_SmokeGray_Back1.jpg',
            price: 10
        },
        {
            title: "Black T-Shirt",
            imageMain: 'http://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/4/0/4001_102.jpg',
            imageAlt: 'http://cdn.shopify.com/s/files/1/0671/4319/products/jumpbox-fitness-mens-tshirt_back.jpg?v=1415306217',
            price: 10
        },
        {
            title: "Blue T-Shirt",
            imageMain: 'http://www.vulcan100.com/image/large/iPZ8kLwDT=sHTvV8m4VsjqcC75Yh/images/2012/07/29/article/kt10/kt10b00218/selected-drill-t-shirt-neon-blue-1550-zoom-0.jpg',
            imageAlt: 'http://moritzaustralia.com.au/wp-content/uploads/2013/04/Moritz-tshirt-royal-blue-back.jpg',
            price: 10
        },
        {
            title: "Red T-Shirt",
            imageMain: 'img/cloths/shirts/BlueFront.jpg',
            imageAlt: 'img/cloths/shirts/Blueback.jpg',
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