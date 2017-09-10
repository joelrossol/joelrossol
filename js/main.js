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
});
