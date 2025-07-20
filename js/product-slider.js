
$('.product-slider__container').slick({
  dots: true,
  arrows: true,
  infinite: false, 
  speed: 300,
  slidesToShow: 4, 
  slidesToScroll: 4, 
});


$('.product-slider__nav-link').on('click', function(e) {
  e.preventDefault();
  $('.product-slider__nav-link').removeClass('product-slider__nav-link--active');
  $(this).addClass('product-slider__nav-link--active');
});