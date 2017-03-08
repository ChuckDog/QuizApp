angular.module('quizService', [])

.factory('quizFactory', function($http) {
	return {
		getQuiz: function() {
			return $http.get('json/quiz.json');
		}
	}
});