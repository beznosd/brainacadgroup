'use strict';

$(document).ready(function() {
	var isLogged = false;

	showLogin();


	$('#btn-login').click(function(e) {
		var userName = '', password = '';
		//console.log('clicked');
		//alert('You entered as ' + $('#login-user-name')[0].value);
		// validate
		userName = $('#login-user-name')[0].value;
		password = $('#login-password')[0].value;

		if (userName && password) {
			$("#showFormLogin").before('<span class="user-name">Hi, '+ userName + '</span>');
			$("#showFormLogin")[0].innerText = 'Log Out';
			$('#form-LogIn').modal('hide');
			localStorage.setItem("userName",userName);
			isLogged = true;
		} else {
			alert('Enter valid Name and password');
		}
		
	});

	$('#showFormLogin').click(function(e) {
		if (!isLogged) {
			$("#form-LogIn").modal("show");
		} else {
			$("#showFormLogin")[0].innerText = 'Log In';
			$("span.user-name").remove();	
			isLogged = false;
			localStorage.removeItem("userName");
		}
	});

	$('#btn-Send').click(function(e) {
		// validate data
		// send data to server
		$("#form-SignUp").modal('hide');
		alert('Congratulations! You signed to the Site. Please login to enter');


	});



	function showLogin() {
		var userName = localStorage.getItem("userName");

		if (userName) {
			$("#showFormLogin").before('<span class="user-name">Hi, '+ userName + '</span>');
			$("#showFormLogin")[0].innerText = 'Log Out';
			isLogged = true;
		}
	}


});

