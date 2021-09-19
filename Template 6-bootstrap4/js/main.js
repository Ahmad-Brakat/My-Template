$(document).ready(function(){ 
  document.documentElement.style.scrollBehavior = "smooth"; 
    $("body").niceScroll({
        cursorcolor:"#FB414E",
        cursorwidth:"7px",
        zindex: "999", 
        scrollspeed: 10,
        bouncescroll: true,  
      });
}); 

//Add to active in li 
$('.navbar ul li').on('click',function(){
$(this).addClass('active').siblings().removeClass('active'); 
// $('.navbar ul li').css(" border-bottom","2px solid #fb414e");
});  



 // Adjust Slider Height
var winH    =$(window).height()
$('.All').height(winH); 

//Navbar SecRoll
$(document).scroll(function(){
  var height=$(".navbar").height();
  if($(this).scrollTop() > height){
      $(".navbar").css("backdrop-filter","blur(4px)").css("box-shadow","0 1.5625rem 2.8125rem #202B30").css("background-color","#202b30ad")
  }else{ 
      $(".navbar").css("backdrop-filter","none").css("box-shadow","none").css("background-color","transparent")
  }
});  

// show and hedding Image

$('.futured ul li').on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
if ($(this).data('class')==='all') {
  $('.info-image div').show(); 
} else {
  $('.info-image div').hide();
  $($(this).data('class')).parent().show(); 

}  
}) 


// $('.futured ul li').on('click',function(){
//   $(this).addClass('active').siblings().removeClass('active')
//   if($(this).data('class')=='all'){
//       $('.info-image img').css('display','none')
//   }else{
//       $('.info-image img').css('display','none');
//       $($(this).data('class')).parent().css('display','inline');
//   }
// });

