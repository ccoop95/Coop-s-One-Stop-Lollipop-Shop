(function($){
	$.fn.highlightMenu = function() {
		return this.each(function() {
			$("#side_menu li").mouseover(function() {
				$(this).animate({
					backgroundColor: "#5C1070"
				});
			});
			$("#side_menu li").mouseout(function() {
				$(this).animate({
					backgroundColor: "#C40D07"
				});
				
			});
		});
	}
})(jQuery);
