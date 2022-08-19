$(document).ready(function($){
	jQuery('.testimonials-slider-single').each(function(){
		var slider = jQuery(this);
		var arrowsHolder = slider.closest('.testimonials').find('.slider-nav');

		if (!slider.hasClass('slick-initialized')) {
			dots: false,
				slider.slick({
				prevArrow: '<button class="icon-prev slick-prev"></button>',
				nextArrow: '<button class="icon-next slick-next"></button>',
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 5000,
				speed: 1000,
				rows: 0,
				autoplay: true,
				appendArrows: arrowsHolder,
				adaptiveHeight: true
			});
		}
	});
	
	var $sticky = $('.res-article .cta-sec');
	var $stickyrStopper = $('.res-learning');
	if (!!$sticky.offset()) { // make sure ".sticky" element exists

		var generalSidebarHeight = $sticky.innerHeight();
		var stickyTop = $sticky.offset().top;
		var stickOffset = 100;
		var stickyStopperPosition = $stickyrStopper.offset().top;
		var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
		var diff = stopPoint + stickOffset;

		$(window).scroll(function(){ // scroll event
			var windowTop = $(window).scrollTop(); // returns number

			if (stopPoint < windowTop) {
				$sticky.css({ position: 'absolute', top: diff });
			} else if (stickyTop < windowTop+stickOffset) {
				$sticky.css({ position: 'fixed', top: stickOffset });
			} else {
				$sticky.css({position: 'absolute', top: 'initial'});
			}
		});
	}
	
});