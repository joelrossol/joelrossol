//at-symbol-codekit-prepend 'photoswipe.js'
$(function () {
    $('.sidebar').hover(enter, leave);
    //asdf
    function enter() {
        //alert();
        $(this).addClass("expanded");
    }
    function leave() {
        $(this).removeClass("expanded");
        //$(this).addClass("collapsed");
    }
    $(".close").click(function () {
        $(".lightbox").removeClass("visible");
        $(".lightbox").addClass("hidden");
        $("body").removeClass("stopScroll");
    });
    $(".photography img").click(function () {
        var imgvar = $(this).attr("src");
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

/*
//some sample code to implement scroll-to in ES6
const btn = document.getElementById('elem');

const smoothScroll = (h) => {
  let i = h || 0;
  if (i < 200) {
    setTimeout(() => {
      window.scrollTo(0, i);
      smoothScroll(i + 10);
    }, 10);
  }
}

btn.addEventListener('click', () => smoothScroll());
*/