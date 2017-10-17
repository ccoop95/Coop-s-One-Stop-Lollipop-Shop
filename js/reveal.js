$(document).ready(function(){
$("#name h5").click(function() {
		alert("slideUp Triggered");
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
		   	$(this).next().slideUp(1000);
			alert("slideUp Triggered");
	   	}
	   	else {
	        $(this).next().slideDown(1000);
			alert("slideDown Triggered");
	   	}
    }); // end click
})