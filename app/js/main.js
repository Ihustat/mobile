$(function(){

    $('.top-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        nextArrow:'<button type="button" class="slick-next slick-arrow"><img src="images/next.svg" alt=""></button>',
        prevArrow:'<button type="button" class="slick-prev slick-arrow"><img src="images/prev.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 640,
            settings: {
            arrows: false,
            }
          },
        ]
      });
});
