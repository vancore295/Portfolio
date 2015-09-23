app.controller("ShopControl", ['$scope', function ($scope) {
	$scope.tests = [
		{
			title: "hoodie",
			imageMain: 'http://papini.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/greynavy_hoodie.jpg',
			imageAlt: 'http://shirts4sale.com/images/sweatshirt/21960/grey_gray_black_2color_hooded_sweatshirt_back.jpg',
			price: 10
		}];

	$scope.hoodies = [
		{
			title: "Gray Hoodie",
			imageMain: 'http://papini.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/greynavy_hoodie.jpg',
			imageAlt: 'http://shirts4sale.com/images/sweatshirt/21960/grey_gray_black_2color_hooded_sweatshirt_back.jpg',
			price: 15
		},
		{
			title: "Black Hoodie",
			imageMain: 'http://papini.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/l/blackgold.jpg',
			imageAlt: 'http://papini.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/l/black_hoodie_back_1.jpg',
			price: 15
		},
		{
			title: "Blue Hoodie",
			imageMain: 'http://www.squirrelsports.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/o/hoody_royal_frt.jpg',
			imageAlt: 'http://images.n22menswear.com/images/polo-ralph-lauren-zipped-mesh-rygby-royal-blue-hoodie-p929-3855_image.jpg',
			price: 15
		},
		{
			title: "Red Hoodie",
			imageMain: 'http://shop.kukrisports.co.uk/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/h/o/hoody_red_so5867-_2__900.jpg',
			imageAlt: 'http://papini.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/red_hoodie_back.jpg',
			price: 15
		}
	];

	$scope.shirts = [
		{
			title: "Gray T-Shirt",
			imageMain: 'http://www.haneslocator.com/wp-content/uploads/2013/12/Hanes_CB_ecoSmart_5170_SmokeGray_Front1.jpg',
			imageAlt: 'http://www.haneslocator.com/wp-content/uploads/2013/11/Hanes_nanoT_4980_SmokeGray_Back1.jpg',
			price:10
		},
		{
			title: "Black T-Shirt",
			imageMain: 'http://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/4/0/4001_102.jpg',
			imageAlt: 'http://cdn.shopify.com/s/files/1/0671/4319/products/jumpbox-fitness-mens-tshirt_back.jpg?v=1415306217',
			price:10
		},
		{
			title: "Blue T-Shirt",
			imageMain: 'http://www.vulcan100.com/image/large/iPZ8kLwDT=sHTvV8m4VsjqcC75Yh/images/2012/07/29/article/kt10/kt10b00218/selected-drill-t-shirt-neon-blue-1550-zoom-0.jpg',
			imageAlt: 'http://moritzaustralia.com.au/wp-content/uploads/2013/04/Moritz-tshirt-royal-blue-back.jpg',
			price:10
		},
		{
			title: "Red T-Shirt",
			imageMain: 'img/cloths/shirts/BlueFront.jpg',
			imageAlt: 'img/cloths/shirts/Blueback.jpg',
			price:10
		}
		
	];

	$scope.shoes = [
		{
			title: "",
			imageMain: '',
			imageAlt: '',
			price:50
		},
		{
			title: "",
			imageMain: '',
			imageAlt: '',
			price:50
		},
		{
			title: "",
			imageMain: '',
			imageAlt: '',
			price:50
		},
		{
			title: "",
			imageMain: '',
			imageAlt: '',
			price:50
		}
	];
}]);