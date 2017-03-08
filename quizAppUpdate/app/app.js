angular.module('quizApp', ['ngRoute', 'quizCtrl', 'quizService'])

.config(function($routeProvider) {
	$routeProvider
	.when('/quiz1', {
		templateUrl: 'app/views/question1.html',
		controller: 'quizCtrl1'
	})
	.when('/quiz2', {
		templateUrl: 'app/views/question2.html',
		controller: 'quizCtrl2'
	})
	.when('/quiz3', {
		templateUrl: 'app/views/question3.html',
		controller: 'quizCtrl3'
	})
	.when('/quiz4', {
		templateUrl: 'app/views/question4.html',
		controller: 'quizCtrl4'
	})
	.when('/quiz5', {
		templateUrl: 'app/views/question5.html',
		controller: 'quizCtrl5'
	})
	.when('/results', {
		templateUrl: 'app/views/results.html',
		controller: 'resultsCtrl'
	})
	.otherwise({ redirectTo: '/quiz1' });
	
});