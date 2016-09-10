<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// add to database
	// echo 'this is a post request text';

	// print_r($_POST);

	// if (isset($_POST['firstname'])) {
	// 	echo $_POST['firstname'] . " " . $_POST['lastname'];
	// }
	// $str = '';
	// for ($i=0; $i < 10000000; $i++) { 
	// 	$str .= $i . ' somestring ';
	// }
	// echo $str;
} else {
	echo 'this is a get request';
}
