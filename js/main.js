$(window).on('load', function () {
  var $preloader = $('#page-preloader');
  $preloader.delay(350).fadeOut('slow');
});

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "menu" link is shown
  var offset = 300;

  var navigationContainer = $('.cd-nav'),
    mainNavigation = navigationContainer.find('#cd-main-nav ul');

  //hide or show the "menu" link
  checkMenu();
  $(window).scroll(function(){
    checkMenu();
  });

  //open or close the menu clicking on the bottom "menu" link
  $('.cd-nav-trigger').on('click', function(){
    $(this).toggleClass('menu-is-open');
    //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
    mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

  });

  function checkMenu() {
    if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
      navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        mainNavigation.addClass('has-transitions');
      });
    } else if ($(window).scrollTop() <= offset) {
      //check if the menu is open when scrolling up
      if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
        //close the menu with animation
        mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //wait for the menu to be closed and do the rest
          mainNavigation.removeClass('is-visible is-hidden has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
        });
      //check if the menu is open when scrolling up - fallback if transitions are not supported
      } else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
          mainNavigation.removeClass('is-visible has-transitions');
          navigationContainer.removeClass('is-fixed');
          $('.cd-nav-trigger').removeClass('menu-is-open');
      //scrolling up with menu closed
      } else {
        navigationContainer.removeClass('is-fixed');
        mainNavigation.removeClass('has-transitions');
      }
    } 
  }
});

// ТАБЫ

$(document).ready(function() { 

  (function ($) { 
    $('.tabfasad ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    
    $('.tabfasad ul.tabs li a').click(function (g) { 
      var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
      
      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');
      
      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
      
      g.preventDefault();
    } );
  })(jQuery);

});

$(document).ready(function() { 

  (function ($) { 
    $('.tabpol ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    
    $('.tabpol ul.tabs li a').click(function (g) { 
      var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
      
      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');
      
      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
      
      g.preventDefault();
    } );
  })(jQuery);

});