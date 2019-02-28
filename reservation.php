<?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "chukwuzitereokoli@gmail.com";

/*
This bit sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here.
*/
$index = "index.html";
$error_page = "error.html";
$thankyou_page = "thank-you.html";

/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$arrival_date = $_REQUEST['arrivaldate'] ;
$departure_date = $_REQUEST['departuredate'] ;
$adult_no = $_REQUEST['adult'] ;
$children_no = $_REQUEST['children'] ;
$fullname = $_REQUEST['fullname'] ;
$email_address = $_REQUEST['email_address'] ;
$msg = 
"Arrivaldate: " . $arrival_date . "\r\n" .
"Departuredate: " . $departure_date . "\r\n" .
"No_of_Adults: " . $adult_no . "\r\n" .
"No_of_children: " . $children_no . "\r\n" .
"Fullname: " . $fullname . "\r\n" .   
"Email: " . $email_address ; 

/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// If the user tries to access this script directly, redirect them to the feedback form,
if (!isset($_REQUEST['email_address'])) {
header( "Location: $index" );
}

// If the form fields are empty, redirect to the error page.
elseif (empty($first_name) || empty($email_address)) {
header( "Location: $error_page" );
}

/* 
If email injection is detected, redirect to the error page.
If you add a form field, you should add it here.
*/
elseif ( isInjected($email_address) || isInjected($first_name)  || isInjected($comments) ) {
header( "Location: $error_page" );
}

// If we passed all previous tests, send the email then redirect to the thank you page.
else {

	mail( "$webmaster_email", "Feedback Form Results", $msg );

	header( "Location: $thankyou_page" );
}
?>