jQuery(document).ready(function($){


  $('.promo__gallery').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  $('.pros__gallery').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.hamburger').click(function(e) {
      e.preventDefault();
      $(this).closest('.nav').find('.nav__list').slideToggle();
  });


});

