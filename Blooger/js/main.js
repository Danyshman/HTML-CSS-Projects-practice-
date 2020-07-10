$(function () {
	// owl-carousel for blog
	$('.owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		dots: false,
		nav: true,
		navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
	});
});
