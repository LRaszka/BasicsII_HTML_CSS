(function($){
    $(function(){
        // Scroll to sections
        $(".jq--scroll-our-food").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-food").offset().top}, 1000);
        });
    });
})(jQuery);