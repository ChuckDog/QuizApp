angular.module('quizCtrl', ['quizService'])

.controller('quizCtrl1', function($rootScope, $scope, quizFactory) {
	
	$scope.initRandom = function() {
		
		if($rootScope.saveAns == undefined) {
			$rootScope.saveAns = [];
		}
	
		$rootScope.quesNum = [];
		var flag = true;
		var ran = Math.floor(Math.random()*7);
		$rootScope.quesNum.push(ran);
		while(flag) {
			var temp = 0;
			ran = Math.floor(Math.random()*7);
			for(var i=0; i<$rootScope.quesNum.length; i++) {
				if($rootScope.quesNum[i] == ran) {
					break;
				} else {
					temp++;
				}
			}
			
			if(temp == $rootScope.quesNum.length) {
				temp = 0;
				$rootScope.quesNum.push(ran);
			}
			
			if($rootScope.quesNum.length == 5) {
				flag = false;
			}
		}
	}
	
	$scope.initRandom();
	
	$scope.question = {};
	$rootScope.questions = {};
	setTimeout(function() {
		quizFactory.getQuiz().success(function(data) {
			$rootScope.questions = data.questions;
			$scope.question = data.questions[$rootScope.quesNum[0]];
			$scope.choice = data.questions[$rootScope.quesNum[0]].choice;
		});
	});
	
	$scope.getAns = function() {
		
		$rootScope.ansOne = [];
		$('input:checkbox:checked').each(function() {
			$rootScope.ansOne.push($(this).val());
		}); 
		console.log($rootScope.ansOne);
	}
})

.controller('quizCtrl2', function($rootScope, $scope, quizFactory) {
	
	$scope.question = {};
	setTimeout(function() {
		quizFactory.getQuiz().success(function(data) {
			$scope.question = data.questions[$rootScope.quesNum[1]];
			$scope.choice = data.questions[$rootScope.quesNum[1]].choice;
		});
	});
	
	$scope.getAns = function() {
		
		$rootScope.ansTwo = [];
		$('input:checkbox:checked').each(function() {
			$rootScope.ansTwo.push($(this).val());
		}); 
		console.log($rootScope.ansTwo);
	}
})

.controller('quizCtrl3', function($rootScope, $scope, quizFactory) {
	
	$scope.question = {};
	setTimeout(function() {
		quizFactory.getQuiz().success(function(data) {
			$scope.question = data.questions[$rootScope.quesNum[2]];
			$scope.choice = data.questions[$rootScope.quesNum[2]].choice;
		});
	});
	
	$scope.getAns = function() {
		
		$rootScope.ansThree = [];
		$('input:checkbox:checked').each(function() {
			$rootScope.ansThree.push($(this).val());
		}); 
		console.log($rootScope.ansThree);
	}
})

.controller('quizCtrl4', function($rootScope, $scope, quizFactory) {
	$scope.question = {};
	$scope.a = '';
	setTimeout(function() {
		quizFactory.getQuiz().success(function(data) {
			$scope.question = data.questions[$rootScope.quesNum[3]];
			$scope.choice = data.questions[$rootScope.quesNum[3]].choice;
		});
	});
	
	$scope.getAns = function() {
		
		$rootScope.ansFour = [];
		$('input:checkbox:checked').each(function() {
			$rootScope.ansFour.push($(this).val());
		}); 
		console.log($rootScope.ansFour);
	}
})

.controller('quizCtrl5', function($rootScope, $scope, quizFactory) {
	$scope.question = {};
	setTimeout(function() {
		quizFactory.getQuiz().success(function(data) {
			$scope.question = data.questions[$rootScope.quesNum[4]];
			$scope.choice = data.questions[$rootScope.quesNum[4]].choice;
		});
	});
	
	$scope.getAns = function() {
		
		$rootScope.ansFive = [];
		$('input:checkbox:checked').each(function() {
			$rootScope.ansFive.push($(this).val());
		}); 
		console.log($rootScope.ansFive);
	}
})

.controller('resultsCtrl', function($rootScope, $scope, quizFactory) {
	
	$scope.questions = {};
	setTimeout(function() {
		quizFactory.getQuiz().success(function(data) {
			$scope.questions = data.questions;
		});
	});
	
	var temp = $rootScope.questions[$rootScope.quesNum[0]].question;
	$scope.quesOne = temp;
	var temp = $rootScope.questions[$rootScope.quesNum[1]].question;
	$scope.quesTwo = temp;
	var temp = $rootScope.questions[$rootScope.quesNum[2]].question;
	$scope.quesThree = temp;
	var temp = $rootScope.questions[$rootScope.quesNum[3]].question;
	$scope.quesFour = temp;
	var temp = $rootScope.questions[$rootScope.quesNum[4]].question;
	$scope.quesFive = temp;
	
	$scope.rightAnsOne = [];
	for(var i=0; i<$rootScope.questions[$rootScope.quesNum[0]].answer.length; i++) {
		$scope.rightAnsOne.push($rootScope.questions[$rootScope.quesNum[0]].answer[i]);
	}
	$scope.rightAnsTwo = [];
	for(var i=0; i<$rootScope.questions[$rootScope.quesNum[1]].answer.length; i++) {
		$scope.rightAnsTwo.push($rootScope.questions[$rootScope.quesNum[1]].answer[i]);
	}
	$scope.rightAnsThree = [];
	for(var i=0; i<$rootScope.questions[$rootScope.quesNum[2]].answer.length; i++) {
		$scope.rightAnsThree.push($rootScope.questions[$rootScope.quesNum[2]].answer[i]);
	}
	$scope.rightAnsFour = [];
	for(var i=0; i<$rootScope.questions[$rootScope.quesNum[3]].answer.length; i++) {
		$scope.rightAnsFour.push($rootScope.questions[$rootScope.quesNum[3]].answer[i]);
	}
	$scope.rightAnsFive = [];
	for(var i=0; i<$rootScope.questions[$rootScope.quesNum[4]].answer.length; i++) {
		$scope.rightAnsFive.push($rootScope.questions[$rootScope.quesNum[4]].answer[i]);
	}
	
	var flag = true;
	for(var i=0; i<$scope.rightAnsOne.length; i++) {
		if($scope.rightAnsOne.length != $rootScope.ansOne.length) {
			$('#p1').addClass('text-danger');
			flag = false;
			break;
		}
		if($scope.rightAnsOne[i] != $rootScope.ansOne[i]) {
			$('#p1').addClass('text-danger');
			flag = false;
			break;
		}
	}
	
	if(flag == true) {
		$('#p1').addClass('text-success');
	} else {
		flag = true;
	}
	
	for(var i=0; i<$scope.rightAnsTwo.length; i++) {
		if($scope.rightAnsTwo.length != $rootScope.ansTwo.length) {
			$('#p2').addClass('text-danger');
			flag = false;
			break;
		}
		if($scope.rightAnsTwo[i] != $rootScope.ansTwo[i]) {
			$('#p2').addClass('text-danger');
			flag = false;
			break;
		}
	}
	
	if(flag == true) {
		$('#p2').addClass('text-success');
	} else {
		flag = true;
	}
	
	for(var i=0; i<$scope.rightAnsThree.length; i++) {
		if($scope.rightAnsThree.length != $rootScope.ansThree.length) {
			$('#p3').addClass('text-danger');
			flag = false;
			break;
		}
		if($scope.rightAnsThree[i] != $rootScope.ansThree[i]) {
			$('#p3').addClass('text-danger');
			flag = false;
			break;
		}
	}
	
	if(flag == true) {
		$('#p3').addClass('text-success');
	} else {
		flag = true;
	}
	
	for(var i=0; i<$scope.rightAnsFour.length; i++) {
		if($scope.rightAnsFour.length != $rootScope.ansFour.length) {
			$('#p4').addClass('text-danger');
			flag = false;
			break;
		}
		if($scope.rightAnsFour[i] != $rootScope.ansFour[i]) {
			$('#p4').addClass('text-danger');
			flag = false;
			break;
		}
	}
	
	if(flag == true) {
		$('#p4').addClass('text-success');
	} else {
		flag = true;
	}
	
	for(var i=0; i<$scope.rightAnsFive.length; i++) {
		if($scope.rightAnsFive.length != $rootScope.ansFive.length) {
			$('#p5').addClass('text-danger');
			flag = false;
			break;
		}
		if($scope.rightAnsFive[i] != $rootScope.ansFive[i]) {
			$('#p5').addClass('text-danger');
			flag = false;
			break;
		}
	}
	
	if(flag == true) {
		$('#p5').addClass('text-success');
	} else {
		flag = true;
	}
});









