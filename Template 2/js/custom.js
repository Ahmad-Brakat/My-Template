$(function() {
    'use strict';
    $('html').niceScroll();
    $('.header').height($(window).height())  
     //show more button
     $('.show-more').click(function() {
       $('.our-work .hidden').fadeIn(1000);
    }); 


     ///show arrow 
      
     var leftarrow=$('.testem  .fa-chevron-left'),
       rightarrow=$('.testem  .fa-chevron-right');
    function checkClient(){
      $('.client:first').hasClass('active') ? leftarrow.fadeOut() : leftarrow.fadeIn();
      $('.client:last').hasClass('active') ? rightarrow.fadeOut() : rightarrow.fadeIn();
    }
    checkClient();
    $('.testem i').click(function(){
      if($(this).hasClass('fa-chevron-right')){
        $('.testem  .active').fadeOut(100,function(){
          $(this).removeClass('active').next('.client').addClass('active').fadeIn();
          checkClient(); 
        }
        )} 
        else{  $('.testem  .active').fadeOut(100,function(){
          $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
          checkClient(); })
        }
      
    }
    )
    });
   