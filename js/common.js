head.ready(function() {

	//on resize
	$(window).resize(function(){

		$(".item__desc").dotdotdot({
			ellipsis: "..."
		});

		scrollHeader();

		if($(window).width() >= 480){
			$('.nav__list').removeClass('is-visible');
			$('.header__nav').css('padding-bottom', '9px');
		}
	});

	if($('.js-wrap').length > 0){

		var wrapperTop = $('.js-wrap').offset().top;
		$(window).scroll(function(){
			scrollHeader();
		});
	}

	// if($('.sidebar').length > 0){

	// 	scrollSidebar();

	// 	$(window).scroll(function(){
	// 		scrollSidebar();
	// 	});

	// 	$(window).resize(function(){
	// 		scrollSidebar();
	// 	});
	// }

	//fixed header
	function scrollHeader(){

		var width = $(window).width(),
			scrollTop = $(window).scrollTop(),
			wrapper = $('.js-wrap'),
			icon =  $('.nav__ico');

		if (scrollTop >= wrapperTop) {
		    wrapper.addClass("is-fixed");
		    if(width <= 480){
		    	icon.addClass('is-active');
		    } else{
		    	icon.removeClass('is-active');
		    }
		} else {
		    wrapper.removeClass("is-fixed");
		    icon.removeClass('is-active');
		}
	}
	scrollHeader();

	$('.nav__ico').click(function(event) {
		if($(this).hasClass('is-active')){

			event.preventDefault();

			var nav = $('.nav__list'),
				width = $(window).width();
				navHeight = $('.nav__list').height(),
				header = $('.header__nav');

			$('.nav__list').toggleClass('is-visible');

			if(nav.hasClass('is-visible')){
				header.css({
					'padding-bottom': navHeight
				});
			} else{
				header.css({
					'padding-bottom': '9px'
				});
			}


		}
	});

	//fixed sidebar
	// function scrollSidebar(){

	// 	var width = $(window).width(),
	// 		scrollTop = $(document).scrollTop(),
	// 		sidebar = $('.js-sidebar'),
	// 		sidebarTop = $('.sidebar').offset().top,
	// 		sidebarHeight = $('.js-sidebar').height(),
	// 		footerTop = $('.footer').offset().top,
	// 		footerHeight = $('.footer').height(),
	// 		contentBottom = $('.content__in').height();

	// 	//position static needed onload and after window width less then 768px
	// 	sidebar.css({
	// 		'position': 'static',
	// 		'width': sidebarWidth()
	// 	});

	// 	if (width <= 751) return;

	// 	if(scrollTop >= sidebarTop) {
	// 		sidebar.css({
	// 			'position': 'fixed',
	// 			'width': sidebarWidth(),
	// 			'top': '15px'
	// 		});
	// 	}

	// 	if (scrollTop + sidebarHeight >= contentBottom) {
	// 		sidebar.css({
	// 			'position': 'absolute',
	// 			'top': footerTop - footerHeight - sidebarHeight
	// 		});
	// 	}

	// }

	//measuring width of sidebar wrapper
	// function sidebarWidth(){
	// 	var sidebarWidth = $('.sidebar').width();
	// 	return sidebarWidth;
	// }

	//truncate paragraph
	$(".item__desc").dotdotdot({
		ellipsis: "..."
	});

});