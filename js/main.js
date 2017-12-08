//at-symbol-codekit-prepend 'photoswipe.js'
$(function() {
    $('.sidebar').hover(enter,leave);
        //asdf
    function enter(){
        //alert();
        $(this).addClass("expanded");
    }
    function leave(){
        $(this).removeClass("expanded");
        //$(this).addClass("collapsed");
    }
    $(".close").click(function(){
            $(".lightbox").removeClass("visible");
            $(".lightbox").addClass("hidden");
            $("body").removeClass("stopScroll");
    });
    $(".photography img").click(function(){
        var imgvar=$(this).attr("src");
        $(".img1").attr("src", imgvar);
        $(".lightbox").addClass("visible");
        $("body").addClass("stopScroll");
        //$("body").addClass("startScroll");
    });
//     lightGallery(document.getElementById('animated-thumbnials'), {
//     thumbnail:true,
//     animateThumb: false,
//     showThumbByDefault: false
// });
});
