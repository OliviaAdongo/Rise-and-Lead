jQuery(document).ready(function () {
    'use strict';
    elementsAnimation();
    ScrolltoTop();
    ScrolltoId();
    SlickSlider();
});
jQuery(window).scroll(function () {
    'use strict';
    elementsAnimation();
});

// AnimateElements
function elementsAnimation() {
    'use strict';
    jQuery('.anim:not(.inited)').each(function () {
        var elem = jQuery(this);
        var scroll_offset = jQuery(window).scrollTop() + jQuery(window).height();
        var elem_top = elem.offset().top;
        if (scroll_offset > elem_top) {
            var delay = 0;
            if (elem.data('anim-delay')) {
                delay = elem.data('anim-delay');
            }
            setTimeout(function () {
                elem.addClass('inited');
            }, delay);
        }
    });
}

// ScrollButtonToTop
function ScrolltoTop() {
    'use strict';
    var scrollTop = jQuery(".scrollTop");
    jQuery(window).scroll(function () {
        var topPos = jQuery(this).scrollTop();
        if (topPos > 100) {
            jQuery(scrollTop).css("opacity", "1");
        } else {
            jQuery(scrollTop).css("opacity", "0");
        }
    });
    jQuery('.scrollTop').on('click', function (e) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 'slow');
        e.preventDefault();
        return false;
    });
};

// ScrollButtonToId
function ScrolltoId() {
    'use strict';
    jQuery('a[href*="#"]').click(function (e) {
        var id = jQuery(this).attr('href');
        jQuery('html,body').animate({
            scrollTop: jQuery(id).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });
}

// SlickSlider
function SlickSlider() {
    'use strict';
    jQuery('.slider').slick({
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToScroll: 3
            }
        }, {
            breakpoint: 660,
            settings: {
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
}

//Parallax
var scene = jQuery('#scene').get(0);
var parallaxInstance = new Parallax(scene);

jQuery(document).ready(function () {
    //hamburger
    jQuery('.hamburger').on('click', function () {
        jQuery(this).toggleClass('is-active');
        if (jQuery(this).hasClass('is-active'))
            jQuery('.menu-wrapper').slideDown();
        else
            jQuery('.menu-wrapper').slideUp();
    });
});

// Loader

jQuery(window).on('load', function () {
    'use strict';
    jQuery('#loader').css('opacity', 0);
    setTimeout(function () {
        jQuery('#loader').hide();
    }, 350);
});