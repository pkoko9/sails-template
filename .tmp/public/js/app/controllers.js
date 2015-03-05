angular.module('app.controllers', ['app.services'])

.controller('homeCTRL', function($scope, $stateParams){
	$scope.message = $stateParams.success
})

.controller('loginCTRL', function($scope, $http, $state, Validate){

	var correctEmail = false;
	var correctPW = false;
	var loginInput = {};
	$scope.emailFail = false;
	$scope.pwFail = false;
	$scope.loginSuccess = false;
	$scope.loginFailure = [];
	$scope.registerSuccess = false;
	$scope.registerFailure = [];

	$scope.login = function(email, password) {
		var input1 = validator.isEmail(email);
		// console.log (input1);
		if (input1) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
				$scope.emailFail = true;
				// correctEmail = false;
		}

		var input2 = validator.isNull(password);
		// console.log (input2);
		if (input2) {
			$scope.pwFail = true;
			// correctPW = true;
		}
			else {
				$scope.pwFail = false;
				correctPW= true;
			}

		if(correctEmail && correctPW) {
			loginInput = {
				identifier: email,
				password: password
			}

		$http.post('/auth/local', loginInput)
			.success(function(res){
				// console.log('success!');
				console.log(res.errors);
			if(res.success) {
					$scope.loginSuccess=true;
					$state.go('home', {success: 'You have successfully logged in!'});
				}
				else {
					$scope.loginFailure = res.errors;
				}
			});

			$scope.email='';
			$scope.password='';
		}
		console.log(loginInput);
	};

})

.controller('registerCTRL', function($scope, $http, $state, Validate){

	var correctEmail = false;
	var correctPW = false;
	var registerInput = {};
	$scope.emailFail = false;
	$scope.pwFail = false;


	$scope.login = function(email, password) {
		
		var input1 = validator.isEmail(email);
		// console.log (input1);
		if (input1) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
				$scope.emailFail = true;
				// correctEmail = false;
		}

		var input2 = !validator.isNull(password);
		console.log (input2);
		if (input2) {
			// $scope.pwFail = false;
			correctPW = true;
		}
			else {
				$scope.pwFail = true;
				// correctPW= false;
			}

		if(correctEmail && correctPW) {
			registerInput = {
				username: email,
				email: email,
				password: password
			}
			$http.post('/auth/local/register', registerInput)
			.success(function(res){
				// console.log('success!');
				console.log(res);
				if(res.success) {
					$state.go('home', {success: 'You have successfully registered and are now logged in!'});
					$scope.registerSuccess=true;
				}
				else {
					$scope.registerFailure = res.errors;
				}
				// $scope.registerSuccess = true;

			});

		$scope.email='';
		$scope.password='';
		}
		console.log(registerInput);
	}
})



