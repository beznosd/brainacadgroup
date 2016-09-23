<?php

	if ( $_SERVER['REQUEST_METHOD'] == 'GET' ) {
		echo 'Server response: GET request';
	}

	if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
		if ( isset($_POST['is_ajax_method']) && $_POST['is_ajax_method'] ) {
			echo 'Server response: POST request, got request from $.ajax';
		} else {
			echo 'Server response: POST request';
		}
	}

	if ( $_SERVER['REQUEST_METHOD'] == 'DELETE' ) {
		echo 'Server respones: DELETE request';
	}

	if ( $_SERVER['REQUEST_METHOD'] == 'PUT' ) {
		echo 'Server respones: PUT request';
	}


