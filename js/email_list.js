$(document).ready(function() {
	$("#email").focus();
	
	$("#email_form").validate({
		rules:{
			email_address:{
				required: true,
				email: true },
			first_name:{
				required: true},
			last_name:{
				required: true}
		},
		messages: {
			email_address: {
				required: "Please supply an email address.",
				email: "This is not a valid email address." },
			first_name: {
				required: "Please a first name:"},
			last_name: {
				required: "Please a first name:"}
		}
	});
});