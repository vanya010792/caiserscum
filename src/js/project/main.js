document.addEventListener( 'DOMContentLoaded', function () {

    $( ".anchor" ).on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $( '.cc-panel-btn a' ).click( function (e) {
        e.preventDefault();
        $( 'body' ).addClass( 'body-overflow' );
        $( '.cc-popup' ).fadeIn();
        if( $(this).hasClass( 'js-login' ) ) {
            $( '.cc-popup__tabs_login' ).addClass( 'cc-popup__tabs_item--active' );
            $( '.cc-popup__tabs_bg' ).removeClass( 'cc-popup__tabs_bg--register' );
            $( '.cc-popup__form--register' ).slideUp();
            $( '.cc-popup__form--login' ).slideDown();
        } else if( $(this).hasClass( 'js-register' ) ) {
            $( '.cc-popup__tabs_register' ).addClass( 'cc-popup__tabs_item--active' );
            $( '.cc-popup__tabs_bg' ).addClass( 'cc-popup__tabs_bg--register' );
            $( '.cc-popup__form--register' ).slideDown();
            $( '.cc-popup__form--login' ).slideUp();
        }
    });
    $( '.cc-popup__overlay, .cc-popup__close' ).click( function () {
        $( 'body' ).removeClass( 'body-overflow' );
        $( '.cc-popup' ).fadeOut();
        $( '.cc-popup__tabs_login' ).removeClass( 'cc-popup__tabs_item--active' );
        $( '.cc-popup__tabs_register' ).removeClass( 'cc-popup__tabs_item--active' );
        $( '.cc-popup__tabs_bg' ).removeClass( 'cc-popup__tabs_bg--register' );
        $( '.cc-popup__form--register' ).slideUp();
        $( '.cc-popup__form--login' ).slideUp();
    });
    $( '.cc-popup__tabs_item' ).click( function () {
        $( '.cc-popup__tabs_item' ).removeClass( 'cc-popup__tabs_item--active' );
        if( $(this).hasClass( 'cc-popup__tabs_login' ) ) {
            $( this ).addClass( 'cc-popup__tabs_item--active' );
            $( '.cc-popup__tabs_bg' ).removeClass( 'cc-popup__tabs_bg--register' );
            $( '.cc-popup__form--register' ).slideUp();
            $( '.cc-popup__form--login' ).slideDown();
        } else if( $(this).hasClass( 'cc-popup__tabs_register' ) ) {
            $( this ).addClass( 'cc-popup__tabs_item--active' );
            $( '.cc-popup__tabs_bg' ).addClass( 'cc-popup__tabs_bg--register' );
            $( '.cc-popup__form--register' ).slideDown();
            $( '.cc-popup__form--login' ).slideUp();
        }
    });

    $( '.cc-faq__title' ).click( function () {
        if( $(this).hasClass( 'cc-faq__title--active' ) ) {
            $(this).siblings('.cc-faq__desc').slideUp();
            $(this).removeClass( 'cc-faq__title--active' );
        } else {
            $(this).siblings('.cc-faq__desc').slideDown();
            $(this).addClass( 'cc-faq__title--active' );
        }
    });

    $( '.cc-success-review' ).click( function () {
        $( this ).toggleClass('cc-success-review--active');
    });
    $( '.cc-widget' ).click( function () {
        $( this ).toggleClass('cc-widget--active');
    });

});