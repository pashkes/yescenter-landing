// .btn scripts goes here 

/*$(function() {
	
});*/
// .advantage scripts goes here 

/*$(function() {
	
});*/
// .info scripts goes here 

/*$(function() {
	
});*/
// .departure scripts goes here 

/*$(function() {
	
});*/
// .package scripts goes here 

/*$(function() {
	
});*/
// .page-top scripts goes here 

/*$(function() {
	
});*/
// .program scripts goes here 

/*$(function() {
	
});*/
// .quest scripts goes here 

/*$(function() {
	
});*/
// .residence scripts goes here 

/*$(function() {
	
});*/
// .tours scripts goes here 

/*$(function() {
	
});*/
// .timetable scripts goes here 

/*$(function() {
	
});*/
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
				breakpoint: 1345,
				settings: {
					arrows: true,
					dots: false,
					slidesToShow: 2
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