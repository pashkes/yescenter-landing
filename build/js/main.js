// .advantage scripts goes here 

/*$(function() {
	
});*/
// .btn scripts goes here 

/*$(function() {
	
});*/
// .departure scripts goes here 

/*$(function() {
	
});*/
// .call-back scripts goes here 

/*$(function() {
	
});*/
// .escort scripts goes here 

/*$(function() {
	
});*/
// .footer scripts goes here 

/*$(function() {
	
});*/
// .info scripts goes here 

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
// .request scripts goes here 

/*$(function() {
	
});*/
// .residence scripts goes here 

/*$(function() {
	
});*/
// .reviews scripts goes here 

/*$(function() {
	
});*/
// .story-photo scripts goes here 

/*$(function() {
	
});*/
// .timetable scripts goes here 

/*$(function() {
	
});*/
// .tours scripts goes here 

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

	/*Custom select*/
	$('.js-custom-select').SumoSelect();
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

$(function() {
	// This will select everything with the class smoothScroll
	// This should prevent problems with carousel, scrollspy, etc...
	$('.js-go-order').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000); // The number here represents the speed of the scroll in milliseconds
				return false;
			}
		}
	});
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference