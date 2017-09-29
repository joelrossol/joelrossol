//@codekit-prepend 'photoswipe.js'
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
    lightGallery(document.getElementById('animated-thumbnials'), {
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
});
});
