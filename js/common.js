head.ready(function() {

	//truncate paragraph
	$(".item__desc").dotdotdot({
		ellipsis: "..."
	});


	//on resize
	$(window).resize(function(){

		$(".item__desc").dotdotdot({
			ellipsis: "..."
		});

		scrollSidebar();
		footerTop();
		footerHeight();

	});

	$(window).scroll(function(){
		scrollSidebar();
	});

	//fixed sidebar
	function scrollSidebar(){
		if($('.sidebar').length > 0){
			var width = $(window).width();
			var scroll = $(window).scrollTop();
			var sidebar = $('.js-sidebar');
			var sidebarHeight = $('.sidebar').height();
			var sidebarPosition = $('.sidebar').offset().top;

			if(scroll >= sidebarPosition && width > 751){
				sidebar.addClass('is-fixed');
				sidebar.css({'width': sidebarWidth()});
			} else {
				sidebar.removeClass('is-fixed');
				sidebar.css('width', sidebarWidth());
			}
			console.log(scroll);
		}
	}
	scrollSidebar();

	//measuring width of sidebar wrapper
	function sidebarWidth(){

		var sidebarWidth = $('.sidebar').width();
		return sidebarWidth;

	}

	//measure stop point
	function footerTop(){
		var footerTop = $('.footer').offset().top;
		return footerTop;
	}

	footerTop();

	function footerHeight(){
		var footerHeight = $('.footer').height();
		return footerHeight;
	}
	footerHeight();
	console.log(footerTop() - footerHeight());

});