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
		centerMode: true,
		responsive: [
			{
				breakpoint: 1343,
				settings: {
					dots: true,
					arrows: false
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

	$('.js-departure-slider').slick({
		variableWidth: true,
		centerPadding: '0',
		slidesToShow: 1,
		dots: true,
		mobileFirst: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1343,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 2
				}
			}

		]
	});
	$('.js-slider-escort').slick({
		centerPadding: '0',
		slidesToShow: 2,
		variableWidth: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1343,
				settings: {
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					dots: true,
					slidesToShow: 1,
					arrows: false
				}
			}

		]
	});
	$('.js-story-photo').slick({
		centerPadding: '0',
		slidesToShow: 2,
		variableWidth: true,
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

	$('.js-reviews-slider').slick({
		centerPadding: '0',
		slidesToShow: 2,
		arrows: true,
		infinite: false,
		appendArrows: $('.reviews__arrows-wrap'),
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					variableWidth: true,
					infinite: true
				}
			}

		]

	});
	var msnry = new Masonry('.masonry', {
		itemSelector: '.timetable__item'
	});


})();
var advantageSlider = $('.js-advantage-slider');
var advantageSliderSettigs = {
	dots: true,
	arrows: false,
	centerPAdding: '0',
	adaptiveHeight: true,
};

$(window).on('load resize', function () {
	slickMobile(advantageSlider, advantageSliderSettigs);
});

// включение слайдера на мобильном
function slickMobile (slider, settings) {
	if ($(window).width() > 767) {
		if (slider.hasClass('slick-initialized')) {
			slider.slick('unslick');
		}
		return
	}
	if (!slider.hasClass('slick-initialized')) {
		return slider.slick(settings);
	}
};