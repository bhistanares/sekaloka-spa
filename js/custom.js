/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
    
    "use strict";
    
    /* Preloader
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
    
    /* Tooltip
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    /* Mouseover
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function(){
        $(".main-menu ul li.megamenu").mouseover(function(){
            if (!$(this).parent().hasClass("#wrapper")){
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function(){
            $("#wrapper").removeClass('overlay');
        });
    });
    
    /* Toggle sidebar
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    /* Product slider 
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    // optional
    $('#blogCarousel').carousel({
        interval: 5000
    });

    /* Smooth Scroll (Fungsi Baru yang Dipindah dari HTML)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });

});