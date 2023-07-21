jQuery(document).ready(function() {
    jQuery("nav li:first-child").addClass('activ-menu')
    jQuery('.nav-item').on('click', function() {
        jQuery(this).addClass('activ-menu').siblings().removeClass('activ-menu');
    })
    jQuery('.hamburger-menu').on('click', function() {
        jQuery('.mb-nav').toggleClass('show-mb-nav');
        console.log('hello')
        
        if(jQuery('body').hasClass('mb-close')) {
            jQuery('body').removeClass('mb-close')
        }else{
            jQuery('body').addClass('mb-close')
        }
    })
})