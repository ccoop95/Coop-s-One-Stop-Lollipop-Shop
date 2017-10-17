$(document).ready(function(){
	$(document).ready(function(){
	$.getJSON("https://api.myjson.com/bins/38p14", function(data){
		$.each(data, function() {
			$.each(this, function(key, value) {				
				$("#us").append(
					'<h2>'+value.name + "</h2><div>" +
					'<p class="contents">' + "<strong>Title:</strong> " + value.title + "<br>" +
					"<strong>Department:</strong> " + value.department + "<br>" +
					"<strong>Bio:</strong> " + value.bio + "</p></div>"
					);
			});
			$("h2").reveal();
		});
	});
	});
});