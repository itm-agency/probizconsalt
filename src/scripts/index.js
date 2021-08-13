import $ from 'jquery';

global.jQuery = $;
global.$ = $;

/**
 * Bootstrap
 */
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

/**
 * Swiper
 */
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

/**
 * Fancybox
 */
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox';

import niceScroll from 'jquery.nicescroll/jquery.nicescroll';

import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

/**
 * Load
 */
jQuery(document).ready(function () {

    /**
     * ScrollBar
     */
    var WINDOW_W = $(window).width();
    if( WINDOW_W > 1023 ) {
        $('html').niceScroll({
            scrollspeed: 130,
        });
    }

    /**
     * Open Menu
     * @click
     */
    $(document).on('click', '.btnActionMenu', function (event) {
        event.preventDefault();

        $('body').toggleClass('menu__active');
    });

    /**
     * Header
     * @scroll
     */
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if( scroll > 5 ) {
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });

    /**
     * Navigation Section
     * @click
     */
    $(document).on('click', '.nav a', function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            header = $('header').outerHeight(true),
            top = $(id).offset().top - header;

        $('body,html').animate({scrollTop: top}, 1500);
    });

    /**
     * SpyScroll
     * @type {bootstrap.ScrollSpy}
     */
    // var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    //     target: '#nav-list-menu',
    //     offset: 90,
    // });

    var sectionIds = $('.header__menu-list a.nav-link');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if(scrollPosition < containerBottom - 130 && scrollPosition >= containerOffset - 130){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }

        });
    });


    /**
     * Home Intro
     * @type {Swiper}
     */
    const introSwiper = new Swiper('.intro .swiper-container', {
        speed: 400,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.intro .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><svg viewBox="0 0 120 120"><g><circle class="default" cx="25" cy="25" r="20"></circle><circle class="default inner" cx="25" cy="25" r="20"></circle></g></svg></span>';
            }
        },
        effect: 'fade',
    });

    /**
     * Home Publications
     * @type {Swiper}
     */
    const publicationsSwiper = new Swiper('.publications__slider .swiper-container', {
        speed: 400,
        spaceBetween: 26,
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.publications__slider .swiper-button-next',
            prevEl: '.publications__slider .swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        },
    });

    /**
     * Home Publications
     * @type {Swiper}
     */
    const casesSwiper = new Swiper('.cases__slider .swiper-container', {
        speed: 400,
        spaceBetween: 26,
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.cases__slider .swiper-button-next',
            prevEl: '.cases__slider .swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        },
    });

    /**
     * Home Experts
     * @type {Swiper}
     */
    const expertsSwiper = new Swiper('.experts .swiper-container', {
        speed: 400,
        spaceBetween: 26,
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.experts .swiper-button-next',
            prevEl: '.experts .swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        },
    });

    /**
     * Logos Swiper
     */
    if ($('.logos__slider').length) {
        var swiperLogos = {};
        $('.logos__slider').each(function (index, element) {
            var $this = $(this);
            $this.addClass('swiperLogos-' + index);
            swiperLogos[index] = new Swiper('.swiperLogos-' + index + ' .swiper-container', {
                    speed: 800,
                    spaceBetween: 20,
                    loop: false,
                    slidesPerView: 1,
                    slidesPerColumn: 3,
                    slidesPerColumnFill: 	'row',
                    navigation: {
                        nextEl: '.swiperLogos-' + index + ' .swiper-button-next',
                        prevEl: '.swiperLogos-' + index + ' .swiper-button-prev',
                    },
                    breakpoints: {
                        1441: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: 'column',
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: 'column',
                        },
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: 'column',
                        },
                    },
                },
            );
        });
    }

    /**
     * Sertificates
     * @type {Swiper}
     */
    const sertificatesSwiper = new Swiper('.sertificates__slider .swiper-container', {
        speed: 400,
        spaceBetween: 26,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.sertificates__slider .swiper-button-next',
            prevEl: '.sertificates__slider .swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
        },
    });

    /**
     * Services
     * @type {Swiper}
     */
    const servicesSwiper = new Swiper('.services_slider .swiper-container', {
        speed: 400,
        spaceBetween: 26,
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.services_slider .swiper-button-next',
            prevEl: '.services_slider .swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 'auto',
            },
            767: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 2,
            },
        },
    });


    /**
     * Fancybox
     * @bind
     */
    Fancybox.bind("[data-fancybox]", {
        Image: {
            zoom: true,
        },
    });

// const fancybox = new Fancybox('[data-fancybox]', {
//     on: {
//
//     },
// });
});
