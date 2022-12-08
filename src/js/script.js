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

      $('.catalog__link').each(function(i)   {
        $(this).on('click', function(e)  {
          e.preventDefault();
          $('.catalog__content').eq(i).toggleClass('catalog__content_active');
          $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
      })

      $('.catalog__list-link').each(function(i)   {
        $(this).on('click', function(e)  {
          e.preventDefault();
          $('.catalog__content').eq(i).toggleClass('catalog__content_active');
          $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
      })

      
     
  });