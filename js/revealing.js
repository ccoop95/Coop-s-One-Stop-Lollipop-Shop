$(document).ready(function(){

$("#faqs h2").click(function() {
		alert("test");
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
			$(this).next().slideUp(1000);
		}
		else {
			$(this).next().slideDown(1000);
		}
	});
});