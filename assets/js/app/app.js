angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider) {
	$stateProvider
	.state('home', {
		url: '/home/:success',
		templateUrl:'templates/home.html',
		controller: 'homeCTRL'
	})
	.state('login', {
		url: '/login',
		templateUrl:'templates/login.html',
		controller: 'loginCTRL'
	})
	.state('register', {
		url: '/register',
		templateUrl:'templates/register.html',
		controller: 'registerCTRL'
	})

})