$(document).ready(function(){
    $(window).scroll(function(){
       if($(window).scrollTop()>= 100){
            $(".header_box").addClass("croll");
            console.log(1)
        }
        else{
            $(".header_box").removeClass("croll")
            console.log(2)
        } 
    })
})
$(document).ready   (function(){
    $(".menu_button").click(function(){
        $("body").append("<div class='shadow'></div>");
        $("body").addClass("go");
        $("#footer_menu").fadeOut();
    })
    $(".menu_close").click(function(){
        $("div").remove(".shadow")
        $("body").removeClass("go")
        $("#footer_menu").fadeIn();
    })
})