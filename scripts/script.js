console.log(123);

$('.slicker').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  draggable: true,
  touchMove: true,
  appendArrows: '.slicker__arrow-container',
  prevArrow: '.slicker__arrow_prev',
  nextArrow: '.slicker__arrow_next',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});