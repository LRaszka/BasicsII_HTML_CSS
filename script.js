(function($){
    $(function(){
        // Scroll to sections
        $(".jq--scroll-our-food").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-food").offset().top}, 1000);
        });

        $(".jq--scroll-about-food").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-food").offset().top}, 900);
        });

        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 900);
        });

        $(".jq--scroll-photo").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photo").offset().top}, 900);
        });

        $(".jq--scroll-form").click(function(){
            $("html, body").animate({scrollTop: $(".jq--form").offset().top}, 900);
        });

        $(".jq--scroll-button1").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-food").offset().top}, 900);
        });

        $(".jq--scroll-button2").click(function(){
            $("html, body").animate({scrollTop: $(".jq--form").offset().top}, 900);
        });

        // Mobile navigation
        $(".jq--nav-icon").click(function(){
            $("nav ul").fadeToggle();
        });

        //změna ikonky menu
        $(".jq--image-hamburger").click(function(){
  
            if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
            {
                $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
            } 
            else 
            {
                $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
            }  
        });
 

    });
})(jQuery);