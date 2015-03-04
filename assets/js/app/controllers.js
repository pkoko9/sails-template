angular.module('app.controllers', [])

.controller('homeCTRL', function($scope){

})

.controller('loginCTRL', function($scope){

	var correctEmail = false;
	var correctPW = false;
	var loginInput = {};
	$scope.emailFail = false;
	$scope.pwFail = false;


	$scope.emailInput = function (email) {
		var input1 = validator.isEmail(email);
		console.log (input1);
		if (input1 === true) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
				$scope.emailFail = true;
				// correctEmail = false;
		}		

	}

	$scope.pwInput = function (password) {
		var input2 = !validator.isNull(password);
		console.log (input2);
		if (input2 === true) {
			// $scope.pwFail = false;
			correctPW = true;
		}
			else {
				$scope.pwFail = false;
				// correctPW= false;
			}
	}

	$scope.login = function(email, password) {
		if(correctEmail && correctPW) {
			loginInput = {
				identifier: email,
				password: password
			};
		}
		console.log(loginInput);
	};

})

.controller('registerCTRL', function($scope){

	var correctEmail = false;
	var correctPW = false;
	var registerInput = {};
	$scope.emailFail = false;
	$scope.pwFail = false;


	$scope.emailInput = function (email) {
		var input1 = validator.isEmail(email);
		// console.log (input1);
		if (input1 === true) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
				$scope.emailFail = true;
				// correctEmail = false;
		}		

	}

	$scope.pwInput = function (password) {
		var input2 = !validator.isNull(password);
		// console.log (input2);
		if (input2 === true) {
			// $scope.pwFail = false;
			correctPW = true;
		}
			else {
				$scope.pwFail = true;
				// correctPW= false;
			}
	}

	$scope.login = function(email, password) {
		if(correctEmail && correctPW) {
			registerInput = {
				username: email,
				email: email,
				password: password
			};

		$scope.emailInput='';
		$scope.pwInput='';
		}
		console.log(registerInput);


	}
})



