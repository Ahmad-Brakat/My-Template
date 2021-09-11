$(function(){
    
    'use strict';
    // Adjust Slider Height
    var winH    =$(window).height(),
        upperH  =$('.upper-bar').innerHeight(),
        navH    =$('.navbar').innerHeight();
        $('.slider,.carousel-item,.over-lay').height(winH -(upperH + navH )); 
    
        //Show and hide imags for click 
        $('.fwork ul li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active')
            if($(this).data('class')=='all'){
                $('.fwork .fimage .col-md').css('opacity','1')
            }else{
                $('.fwork .fimage .col-md').css('opacity','.08');
                $($(this).data('class')).parent().css('opacity','1');
            }
        });
});