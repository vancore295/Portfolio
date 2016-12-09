angular.module('portfolioApp').controller('resumeController', ['$scope',
    function ($scope) {

        var canvas = document.getElementById('line');
        var context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(0, canvas.height / 2);//starting point
        context.lineTo(canvas.width, canvas.height / 2);//end point
        context.lineWidth = 20;
        context.stroke();
    }]);