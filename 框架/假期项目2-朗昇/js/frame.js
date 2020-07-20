$(function () {
    $(".has-dropdown").hover(function () {
        $(this).find(".dropdown").css({ display: "block" }).addClass("animated-fast fadeInUpMenu")
    }, function () {
        $(this).find(".dropdown").css({ display: "none" }).removeClass("animated-fast fadeInUpMenu")
    }
    );

    if ($(window).scrollTop() > 50) {
        $('body').addClass('scrolled');
        $(".gototop").addClass("active");
    } else {
        $('body').removeClass('scrolled');
        $(".gototop").removeClass("active");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('body').addClass('scrolled');
            $(".gototop").addClass("active");
        } else {
            $('body').removeClass('scrolled');
            $(".gototop").removeClass("active");
        }
    });
    $(".gototop").click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 500);
        return false;
    })
    $(function () {
        var one =  setInterval(function(){
            if ($(".js-counter").parent().parent().parent().hasClass("fadeIn")) {
                $(".js-counter").each(function () {
                    $(this).numberRock({
                        lastNumber: $(this).attr("data-to"),		//终止数字
                        duration: 800,
                        easing: 'swing',  	//慢快慢
                    });
                })
                clearInterval(one)
            }
        })
    });
    (function ($) {
        $.fn.numberRock = function (options) {
            var defaults = {
                lastNumber: 100,
                duration: 2000,
                easing: 'swing'  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
            };
            var opts = $.extend({}, defaults, options);
            $(this).animate({
                num: "numberRock",
            }, {
                duration: opts.duration,
                easing: opts.easing,
                complete: function () {
                    console.log("success");
                },
                step: function (a, b) {  //可以检测定时器的每一次变化
                    $(this).html(parseInt(b.pos * opts.lastNumber));
                },
            });
        }
    })(jQuery);
})
$(function () {
    var z = $(window).scrollTop();
    $(window).scroll(function () {
        z = $(window).scrollTop();
        godown()
    })
    var godown = function () {
        $(".animate-box").each(function () {
            var i = $(this).offset().top;
            if (i - z < 500) {
                $(this).addClass("fadeIn animated-fast");
            }
        })
    }
    godown()
})