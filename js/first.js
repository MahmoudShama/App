
$("#myBtn1").click(function(){
  $(".cusOpinion img").attr("src","images/testimonial-2.jpg")

})

$("#myBtn").click(function(){
  $(".cusOpinion img").attr("src","images/testimonial-1.jpg")
  
})

/******************/

var aboutOffset = $("#about").offset().top
$(window).scroll(function(){
  let wScroll = $(window).scrollTop();
  if(wScroll>aboutOffset)
  {
    $("nav").addClass("bg-black")
  }
  else
  {
    $("nav").removeClass("bg-black")
  }
}) 
/*****************/
$("a[href^='#']").click(function(){
  let  aHref=$(this).attr("href")
  $("html,body").animate({scrollTop:$(aHref).offset().top},700)
})

/*********************/
$(document).ready(function(){
  $("#loading").fadeOut(3000,function(){
    $("body").css("overflow","auto")
  })
})