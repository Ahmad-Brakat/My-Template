$(document).ready(function(){ 
   
    $("body").niceScroll({
        cursorcolor:"#F95C19",
        cursorwidth:"8px",
        zindex: "999",
        scrollspeed: 10,
      });
}); 


//Chang bg-color in srroll
$(document).scroll(function(){
    var height=$(".navbar").height();
    if($(this).scrollTop() > height){
        $(".navbar").css("backdrop-filter","blur(4px)").css("box-shadow","0 1.5625rem 2.8125rem rgb(47 46 65 / 8%)")
    }else{ 
        $(".navbar").css("backdrop-filter","none").css("box-shadow","none")
    }
}); 
//Add to active in li 
$('.navbar ul li').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
}); 

//add display block in input
$('.navbar ul li .ser').on('click',function(){
    $('.navbar ul li  input').addClass('d-block').removeClass('d-none');
    }); 

$('.navbar ul li .ser').off("click",function(){
    $('.navbar ul li  input').addClass('d-none').removeClass('d-block');
    }); 


    // Start Card 
   