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
	var msnry = new Masonry( '.timetable__inner', {
		itemSelector: '.timetable__item'
	});
})();