(function($){
	$.fn.navMenu = function() {
		return this.each(function() {
			var items = $("#nav li a");
			items.css('font-family', 'ariel, helvetica, sans-serif')
				 .css('font-weight', 'bold')
				 .css('text-decoration', 'none')
				 .css('display', 'block')
				 .css('background-color', '#C40D07')
				 .css('color', 'white')
				 .css('padding', '7px 10px 7px 10px')
				 .css('border-left', '1px solid white')
				 .css('border-right', '1px solid white')
			items.mouseover(function() {
				$(this).css('background-color', '#0072FF')
			});
			items.mouseout(function() {
				$(this).css('background-color', '#C40D07')
			});
		});
	}
})(jQuery);