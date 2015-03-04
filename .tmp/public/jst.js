this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Home</h1>\n<a ui-sref="login">Login</a>\n<a ui-sref="register">Register</a>\n<a ui-sref="home">Home</a>\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Login</h1>\n<a ui-sref="login">Login</a>\n<a ui-sref="register">Register</a>\n<a ui-sref="home">Home</a>\n\n\n\n<div ng-controller="loginCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(email, password)">\n\t\n\t\t<div>Email</div>\n\t\t\t<input type="text" ng-model="email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" ng-model="password" placeholder="Enter your password">\n\n\t\n\t\t<button type="submit">Submit</button>\n\t</form>\n\n\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\t\n\n</div>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Register</h1>\n<a ui-sref="login">Login</a>\n<a ui-sref="register">Register</a>\n<a ui-sref="home">Home</a>\n\n<div ng-controller="registerCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(email, password)">\n\t\n\t\t<div>Email</div>\n\t\t\t<input type="text" ng-model="email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" ng-model="password" placeholder="Enter your password">\n\n\t\n\t\t<button type="submit">Submit</button>\n\t</form>\n\n\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\t\n\n</div>';

}
return __p
};