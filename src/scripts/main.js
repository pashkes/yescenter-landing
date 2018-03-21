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

	$('.js-departure-slider').slick({
		arrows: false,
		dots: true,
		centerPadding: '0',
    variableWidth: true
	});

  var msnry = new Masonry( '.masonry', {
    itemSelector: '.timetable__item'
  });



})();
var advantageSlider = 	$('.js-advantage-slider');
var advantageSliderSettigs ={
  dots: true,
  arrows: false,
  centerPAdding: '0',
  adaptiveHeight: true
};

$(window).on('load resize', function () {
  slickMobile(advantageSlider, advantageSliderSettigs);
});
// включение слайдера на мобильном
function slickMobile(slider, settings) {
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