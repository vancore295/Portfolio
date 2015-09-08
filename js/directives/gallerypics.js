app.directive('carouselDisplay',function(){
  return{
    restrict: 'E',
    scope:{
      info: '='
    },
    templateUrl: 'carousel.html'
  };
});