/* global $ , console */



$(document).ready(function(){
    $('#content').show();
    $('#loading').hide();
})
// Scrolling Things
$(window).on("scroll", function () {
        "use strict";
        if($(this).scrollTop()>0)
            $("nav").css("background","rgba(0,0,0,.7)");
        else 
            $("nav").css("background","#02CAD4");
    });
$("nav .nav-item").on("click", function () {
    $("html,body").animate({scrollTop: $($(this).attr("data-value")).offset().top},1000)
});






