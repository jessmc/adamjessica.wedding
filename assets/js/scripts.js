$(document).ready(function(){


	$('.story-slides').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  nextArrow: '<i class="fa fa-angle-right"></i>',
  prevArrow: '<i class="fa fa-angle-left"></i>',
  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});