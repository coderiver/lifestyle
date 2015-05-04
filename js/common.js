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
	});

	$(window).scroll(function(){
		scrollSidebar();
	});

	//fixed sidebar
	function scrollSidebar(){
		if($('.sidebar').length > 0){
			var width = $(window).width(),
				scrollTop = $(document).scrollTop(),
				sidebar = $('.js-sidebar'),
				sidebarHeight = $('.js-sidebar').height(),
				sidebarTop = $('.sidebar').offset().top;

			//position static needed onload and after window width less then 768px
			sidebar.css({
				'position': 'static',
				'width': sidebarWidth()
			});

			if (width <= 751) return;

			if(scrollTop >= sidebarTop) {
				sidebar.css({
					'position': 'fixed',
					'width': sidebarWidth(),
					'top': '15px'
				});
			}

			if (scrollTop + sidebarHeight >= footerTop()) {
				sidebar.css({
					'position': 'absolute',
					'top': footerTop() - footerHeight() - sidebarHeight
				});
			}
		}
	}
	scrollSidebar();

	//measuring width of sidebar wrapper
	function sidebarWidth(){
		var sidebarWidth = $('.sidebar').width();
		return sidebarWidth;
	}

	//measuring footer height
	function footerHeight(){
		var footerHeight = $('.footer').height();
		return footerHeight;
	}

	function footerTop(){
		var footerTop = $('.footer').offset().top;
		return footerTop;
	}

});