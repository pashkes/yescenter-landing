(function () {
	$('.js-program-slider').slick({
		dots: false,
		variableWidth: true,
		centerPadding: '0',
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1343,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2
				}
			}, {
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$('.js-residence-slider').slick({
    arrows: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 1343,
				settings: {
          dots: true,
          arrows: false
				}
			}

		]
	});
	var msnry = new Masonry( '.masonry', {
		itemSelector: '.timetable__item'
	});
})();
