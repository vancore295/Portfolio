app.directive('madlibsinfo',function(){
	return{
		restrict: 'E',
		scope:{
			info:'='
		},
		templateUrl:'js/directive/madlibsinfo.html'
	};
});