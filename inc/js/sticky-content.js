(function($) {

	$(".oxsn_sticky_content").each(function() {

		var sticky = $(this),
			stickyTopOriginal = sticky.offset().top,
			stickyLeftOriginal = sticky.offset().left;

		$(window).scroll(function(){
			
			var stickyTop = sticky.offset().top,
				stickyLeft = sticky.offset().left,
				scroll = $(window).scrollTop();

			if (scroll >= stickyTop) {

				sticky.css({'position':'fixed'}).css({'top':'0px'}).css({'left':stickyLeftOriginal});

			}

			if (scroll <= stickyTopOriginal) {

				sticky.css({'position':'relative'}).css({'top':'auto'}).css({'left':'auto'});

			}

		});

	});

})(jQuery);