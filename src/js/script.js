$(document).ready(function(){
    $('.corousel__inner').slick({
        speed: 300,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>'
      });


      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active').eq($(this).index()).addClass('catalog__wrapper_active');
      });
  });