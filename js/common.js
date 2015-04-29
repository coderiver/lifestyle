head.ready(function() {

	$(".item__desc").dotdotdot({
		ellipsis: "..."
	});

	//on resize
	$(window).resize(function(){

		$(".item__desc").dotdotdot({
			ellipsis: "..."
		});

	});

});