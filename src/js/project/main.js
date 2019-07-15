document.addEventListener( 'DOMContentLoaded', function () {
    $( ".anchor" ).on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $( '.cc-panel-btn .js-link' ).click( function (e) {
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

    if( document.querySelector( '.cc-faq__title' ) ) {
        $('.cc-faq__title').click(function () {
            if ($(this).hasClass('cc-faq__title--active')) {
                $(this).siblings('.cc-faq__desc').slideUp();
                $(this).removeClass('cc-faq__title--active');
            } else {
                $(this).siblings('.cc-faq__desc').slideDown();
                $(this).addClass('cc-faq__title--active');
            }
        });
    }

    if( document.querySelector( '.cc-reviews__btn--1' ) ) {
        $( '.cc-reviews__btn--1' ).click( function (e) {
            e.preventDefault();
            $( this ).fadeOut();
            $( this ).siblings( '.cc-reviews__list' ).children( '.cc-reviews__list--2' ).slideDown();
            $( this ).siblings( '.cc-reviews__btn--2' ).fadeIn();
        });
        $( '.cc-reviews__option .read-more' ).click( function () {
            $( this ).css({ display: 'none' });
            $( this ).parent().siblings( '.cc-reviews__desc' ).children( '.drop' ).css({ display: 'inline' });
            $( this ).parent().siblings( '.cc-reviews__desc' ).children( '.text' ).children( 'b' ).css({ display: 'none' });
            $( this ).siblings( '.our-review' ).css({ display: 'block' });
        });
    }

    const NAME_MALE = [
        "Liam", "Lucas", "Jackson", "Aiden", "Henry", "Wyatt", "Nathan", "Noah", "Oliver", "Jacob",
        "Elijah", "Matthew", "Caleb", "Mason", "Alexander", "James", "Benjamin", "Jayden", "Ethan", "Jack",
        "Luke", "William", "Michael", "Ryan", "Logan", "Owen", "Daniel", "Carter", "Gabriel", "Isaac", "Alexander"
    ];
    const NAME_FEMALE = [
        "Emma", "Emily", "Amelia", "Charlotte", "Mia", "Isabella", "Sophia", "Olivia", "Ava",
        "Madison", "Sofia", "Evelyn", "Chloe", "Ella", "Lily", "Avery", "Abigail", "Harper", "Grace",
        "Aria", "Nora", "Elizabeth", "Zoe", "Addison", "Grace", "Audrey", "Hannah", "Zoey", "Scarlett", "Aubrey", "Ellie"
    ];
    const NICK_NAME = [
        "Alpha", "Beast", "Commando", "Crash test", "Dragon", "Gutsy heart", "Help bringer", "Warrior", "Brunette", "Cuddlies",
        "Free butterfly", "Little monster", "Raspberry", "Runaway bride", "Sweet cheeks", "Tragedienne", "Wicked", "Accident", "Frank heart", "High tower",
        "Stardust", "Tornado", "Big head", "Chewbacca", "Dreamy devil", "Mad Irishman", "Muffin lover", "Sarcasm Provider", "Toxic alien", "Odd duck", "Alpha"
    ];
    const FAMILY = [
        "Abramson", "Albertson", "Baldwin", "Walkman", "Boolman", "Carroll", "Creighton", "Dickinson", "Dyson", "Eddington",
        "Fane", "Fitzgerald", "Gill", "Gate", "Hailey", "Hodges", "Jacobson", "Jones", "Kelly", "Kennedy",
        "Lawman", "Little", "MacAlister", "Michaelson", "Youmans", "Nathan", "Osborne", "Palmer", "Ralphs", "Smith", "Timmons"
    ];
    let familyRandom = 0;
    let widgetIntervalOne = setInterval( function () {
        RandomReviews();
        clearInterval( widgetIntervalOne );
    }, 13000);
    let widgetIntervalTwo = setInterval( function () {
        RandomReviews();
    }, 150000);
    function RandomReviews() {
        $( '.cc-widget' ).removeClass( 'cc-widget--active' );
        let myRandom = randomName();
        let data = Math.round(Math.random() * 9 );
        if( data < 2 ) {
            data += 2
        }
        let name;
        if( myRandom[1] === 0 ) {
            if (myRandom[0] === 0) {
                name = NAME_MALE[(myRandom[1])];
            } else {
                name = NAME_FEMALE[(myRandom[1])];
            }
            if (familyRandom === 3) {
                name = `${name} ${FAMILY[(myRandom[2])].charAt(0)}`;
            } else {
                name = `${name} ${FAMILY[(myRandom[2])]}`;
            }
        } else {
            name = NICK_NAME[(myRandom[2])];
        }
        setTimeout( function () {
            $( '.cc-widget__name' ).html( name );
            $( '.cc-widget__data' ).html( `${data} hour ago` );
            $( '.cc-widget' ).addClass( 'cc-widget--active' );
        }, 1000 );
    }
    function randomName() {
        let nameArr = [], myRandom;
        for( let a = 0; a < 5; a++ ) {
            if( a === 0 || a === 1 ) {
                myRandom = Math.round( Math.random() );
                nameArr[a] = myRandom;
            } else if( a === 4 ) {
                myRandom = Math.round(Math.random() * 3);
                familyRandom = myRandom;
            } else {
                myRandom = Math.round(Math.random() * 30);
                nameArr[a] = myRandom;
            }
        }
        return nameArr;
    }
    $( '.cc-widget' ).click( function () {
        $( '.cc-widget' ).removeClass( 'cc-widget--active' );
    });
});