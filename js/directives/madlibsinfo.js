app.directive('madlibsinfo', function () {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'madlibsinfo.html'
  };
});