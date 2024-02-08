/*-----------------------------------------------------------------------------------

    Template Name: Blesso - Crowdfunding & Charity HTML Template



    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    Js INDEX

    ===================

    ## Counter Style One
    ## Project Style One
    ## Team Slider
    ## Featured Slider One
    ## Client Slider
    ## Client Review Slider
    ## C-Slider
    ## Blog-Slider
    ## Nice Select
    ## P-Slider
    ## Featured Slider Two
    ## Scroll Top  +  Timeline
    ## Contact Us
    ## Products List Grid
    ## Animation on scroll
    ## What we build
    ## PD Gallery
    ## Cart Popup
    ## Preloader
    ## Sticky Header
    ## Location Map Pin


-----------------------------------------------------------------------------------*/



jQuery(document).ready(function ($) {



    "use strict";



    // Counter Style One
    if ($(".counter")[0]) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Project Style One
    if ($(".project-slider.owl-carousel")[0]) {
        $('.project-slider.owl-carousel').owlCarousel({
            items: 2,
            margin: 12,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                425: {
                    items: 1
                },
                1050: {
                    items: 2
                }
            }
        });
    }

    // Team Slider
    if ($(".team-slider")[0]) {
        $('.team-slider.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            navText: ["<i class='fa-solid fa-angles-left'></i>", "<i class='fa-solid fa-angles-right'></i>"],
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            center: true,
            stagePadding: 50,
            margin: 10,
            navContainer: '.team-slider-nav',
            responsive: {
                0: {
                    items: 1
                },
                1030: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
        // Go to the next item
        var x = $('.team-slider .owl-stage').children('.team-slider .owl-item.active').eq(0);
        (x).addClass('open');
        $('.team-slider-nav .owl-next').click(function () {
            $('.team-slider .owl-item.active.open').removeClass('open');
            var x = $('.team-slider .owl-stage').children('.team-slider .owl-item.active').eq(0);
            (x).addClass('open');
            console.log("Nextt");
        })
        // Go to the previous item
        $('.team-slider-nav .owl-prev').click(function () {
            $('.team-slider .owl-item.active.open').removeClass('open');
            var x = $('.team-slider .owl-stage').children('.team-slider .owl-item.active').eq(0);
            (x).addClass('open');
            console.log("Prev");
        })
    }

    // Featured Slider One
    if ($(".f-slider-one")[0]) {
        $('.f-slider-one.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            stagePadding: 0,
            nav: true,
            navText: ["<button><i class='fa-solid fa-angles-left'></i></button>", "<button><i class='fa-solid fa-angles-right'></i></button>"],
            dots: false,
            animateOut: 'fadeOut',
            touchDrag: false,
            mouseDrag: false
        });
    }

    // Client Slider
    if ($(".client-slider")[0]) {
        $('.client-slider.owl-carousel').owlCarousel({
            items: 5,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }

    // Client Review Slider
    if ($(".client-review-slider")[0]) {
        $('.client-review-slider.owl-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            dots: true,
        });
    }

    // C-Slider
    if ($(".c-slider")[0]) {
        $('.c-slider.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive: {
                0: {
                    nav: false,
                },
                768: {
                    nav: true
                }
            }
        });
    }

    // Blog-Slider
    if ($(".blog-slider")[0]) {
        $('.blog-slider.owl-carousel').owlCarousel({
            items: 3,
            center: true,
            loop: true,
            margin: 12,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    center: false,
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    // Nice Select
    if ($("select")[0]) {
        $('select').niceSelect();
    }

    // P-Slider
    if ($(".p-slider.owl-carousel")[0]) {
        $('.p-slider.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            center: true,
            // dots:true,
            // autoplay: true,
            // autoplayTimeout: 3000,
            // autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    center: false,
                    items: 2,
                },
                1100: {
                    items: 3
                }
            }
        });
    }

    // Team Slider
    if ($(".prj-slider")[0]) {
        $('.prj-slider.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            center: true,
            margin: 10,
            navContainer: '.prj-slider-nav',
            animateOut: 'fadeOut'
        });
    }

    // Featured Slider Two
    if ($(".f-2-slider")[0]) {
        $('.f-2-slider.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            margin: 10,
            navContainer: '.f-2-s-nav',
        });
    }

    // Project Detail Slider
    if ($(".p-d-slider")[0]) {
        $('.p-d-slider.owl-carousel').owlCarousel({
            items: 1,
            dots: true,
        });
    }

    // Scroll Top  +  Timeline
    window.onscroll = function () {
        var num = window.pageYOffset;
        $('#timeline').waypoint(function () {
            $(".fill").css("height", num);
        }, {
            offset: '100%'
        });
        if (num >= 160) {
            document.querySelector('#scrollTop').classList.add('active');
        }
        else {
            document.querySelector('#scrollTop').classList.remove('active');
        }
    }
    // // Just add #scrollTop to the footer
    document.querySelector('#scrollTop').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // Contact Us
    $(".contact-us .c-data ul li").click(function () {
        $(".contact-us .c-data a").removeClass("active");
        $(this).children("a").addClass("active");

        var m_index = $(this).index();


        if (m_index == 0) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(1)")).addClass("active");
            console.log("yes")
        };
        if (m_index == 1) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(2)")).addClass("active");
            console.log("yes")
        };
        if (m_index == 2) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(3)")).addClass("active");
            console.log("yes")
        };
        if (m_index == 3) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(4)")).addClass("active");
            console.log("yes")
        };
        if (m_index == 4) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(5)")).addClass("active");
            console.log("yes")
        };
    });

    if ($(".blog-posts.grid")[0]) {
        var elem = document.querySelector('.grid');
        var msnry = new Masonry(elem, {
            itemSelector: '.grid-item',
            gutter: 70,
        });
    }


    // Products List Grid
    if ($(".shop-filter")[0]) {
        $(".shop-filter a.list").click(function () {
            $(".p-slider").removeClass("grid");
            $(".p-slider").addClass("list");
        });

        $(".shop-filter a.grid").click(function () {
            $(".p-slider").removeClass("list");
            $(".p-slider").addClass("grid");
        });
    }

    const SOCIAL_MEDIA = {
        whatsapp: 'https://api.whatsapp.com/send?phone=573103695000',
    }
    const Header = `
    <div class="container">
    <div class="row">
        <div class="desktop-nav">
            <div class="header-logo">
                <a href="index.html">
                    <figure>
                        <img style="width: 120px;" src="assets/images/logo-sudecap-white.png" alt="logoo">
                    </figure>
                </a>
            </div>
            <div class="nav-bar">
                <ul>
                    <li>
                        <a href="index.html">Inicio</a>
                    </li>
                    <li>
                        <a href="shop.html">Tienda</a>
                    </li>
                    <li>
                        <a href="about.html">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="contact.html">Contacto</a>
                    </li>
                </ul>
                <div class="extras">
                    <a href="javascript:void(0)" id="mobile-menu" class="menu-start">
                        <svg id="ham-menu" viewBox="0 0 100 100">
                            <path class="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path class="line line2" d="M 20,50 H 80" />
                            <path class="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </a>
                    <a href="javascript:void(0)" id="desktop-menu" class="menu-start">
                        <svg id="ham-menue" viewBox="0 0 100 100">
                            <path class="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path class="line line2" d="M 20,50 H 80" />
                            <path class="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </a>
                    <div class="cart-popup">
                        <ul>
                            <li class="d-flex align-items-center position-relative">
                                <div class="p-img light-bg">
                                    <img src="assets/images/p-1.png" alt="Product Image">
                                </div>
                                <div class="p-data">
                                    <h3 class="font-semi-bold">Pastoral Principles Cards</h3>
                                    <p class="theme-clr font-semi-bold">1 x $25.00</p>
                                </div>
                                <a href="JavaScript:void(0)" id="crosss"></a>
                            </li>
                            <li class="d-flex align-items-center position-relative">
                                <div class="p-img light-bg">
                                    <img src="assets/images/p-1.png" alt="Product Image">
                                </div>
                                <div class="p-data">
                                    <h3 class="font-semi-bold">Pastoral Principles Cards</h3>
                                    <p class="theme-clr font-semi-bold">1 x $25.00</p>
                                </div>
                                <a href="JavaScript:void(0)" id="cross"></a>
                            </li>
                        </ul>
                        <div class="cart-total d-flex align-items-center justify-content-between">
                            <span class="font-semi-bold">Total:</span>
                            <span class="font-semi-bold">$60.00</span>
                        </div>
                        <div class="cart-btns d-flex align-items-center justify-content-between">
                            <a class="font-bold" href="JavaScript:void">View Cart</a>
                            <a class="font-bold theme-bg-clr text-white checkout"
                                href="JavaScript:void">Checkout</a>
                        </div>
                    </div>
                    <a href="/"  target="_blank"
                        class="theme-btn simple attr_whatsapp">Escribenos
                    </a>
                </div>
            </div>
        </div>
        <div class="mobile-nav" id="mobile-nav">
            <div class="res-log">
                <a href="index.html">
                    <img src="assets/images/logo-sudecap.png" style="height:100px;" alt="Responsive Logo">
                </a>
            </div>
            <ul>
            <li>
                <a href="index.html">Inicio</a>
            </li>
            <li>
                <a href="shop.html">Tienda</a>
            </li>
            <li>
                <a href="about.html">Sobre nosotros</a>
            </li>
            <li>
                <a href="contact.html">Contacto</a>
            </li>
        </ul>
            <a href="JavaScript:void(0)" id="res-cross"></a>
        </div>
        <div class="mobile-nav desktop-menu">
            <figure>
                <img src="assets/images/desktop-menu-img.jpg" alt="Desktop Menu Image">
            </figure>
            <h3>Mantentente en contacto</h3>
            <p class="num">Teléfono: <span class="phone"></span> </p>
            <p class="adrs">Dirección: <span class="address"></span></p>
        </div>
    </div>
    </div>
    `;
    const Footer = ` <div class="footer-p-2">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="footer-col">
                    <h3>Información</h3>
                    <p>Nuestra compañía está soportada con experiencia en  pozos estratigráficos en las campañas de exploración 2012, 2014 y 2015 de la Agencia Nacional de Hidrocarburos.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="footer-col">
                    <h3>Contacto - Colombia</h3>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="79" height="94" viewBox="0 0 79 94">
                                <defs>
                                    <clipPath id="clip-location_B">
                                        <rect width="79" height="94" />
                                    </clipPath>
                                </defs>
                                <g id="location_B" data-name="location B" clip-path="url(#clip-location_B)">
                                    <path id="Path_121" data-name="Path 1"
                                        d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                                        transform="translate(-922.725 -482.15)" />
                                    <path id="Path_23" data-name="Path 2"
                                        d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                                        transform="translate(25 26)" />
                                </g>
                            </svg>
                            <p> <span class="address"></span> </p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="40" height="62" viewBox="0 0 40 62">
                                <defs>
                                    <clipPath id="dasdasdasd">
                                        <rect width="40" height="62" />
                                    </clipPath>
                                </defs>
                                <g id="Mobsdfsdfsdfsdfile" clip-path="url(#dasdasdasd)">
                                    <path id="Path_331" data-name="Path 1"
                                        d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                                        transform="translate(1 1)" />
                                    <path id="Path_2" data-name="Path 2"
                                        d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                                        transform="translate(14 48)" />
                                </g>
                            </svg>
                            <p><span class="phone"></span></p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="102" height="93" viewBox="0 0 102 93">
                                <defs>
                                    <clipPath id="clip-Email_B">
                                        <rect width="102" height="93" />
                                    </clipPath>
                                </defs>
                                <g id="Email_B" data-name="Email B" clip-path="url(#clip-Email_B)">
                                    <path id="Path_1444" data-name="Path 1"
                                        d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                                        transform="translate(-918 -492)" />
                                    <path id="Path_24" data-name="Path 2"
                                        d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                                        transform="translate(-918 -492)" />
                                </g>
                            </svg>
                            <p><span class="email"></span></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="footer-col">
                    <h3>Contacto - Perú</h3>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="79" height="94" viewBox="0 0 79 94">
                                <defs>
                                    <clipPath id="clip-location_B">
                                        <rect width="79" height="94" />
                                    </clipPath>
                                </defs>
                                <g id="location_B" data-name="location B" clip-path="url(#clip-location_B)">
                                    <path id="Path_121" data-name="Path 1"
                                        d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                                        transform="translate(-922.725 -482.15)" />
                                    <path id="Path_23" data-name="Path 2"
                                        d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                                        transform="translate(25 26)" />
                                </g>
                            </svg>
                            <p> <span class="address_peru"></span> </p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="40" height="62" viewBox="0 0 40 62">
                                <defs>
                                    <clipPath id="dasdasdasd">
                                        <rect width="40" height="62" />
                                    </clipPath>
                                </defs>
                                <g id="Mobsdfsdfsdfsdfile" clip-path="url(#dasdasdasd)">
                                    <path id="Path_331" data-name="Path 1"
                                        d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                                        transform="translate(1 1)" />
                                    <path id="Path_2" data-name="Path 2"
                                        d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                                        transform="translate(14 48)" />
                                </g>
                            </svg>
                            <p><span class="phone_peru"></span></p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="102" height="93" viewBox="0 0 102 93">
                                <defs>
                                    <clipPath id="clip-Email_B">
                                        <rect width="102" height="93" />
                                    </clipPath>
                                </defs>
                                <g id="Email_B" data-name="Email B" clip-path="url(#clip-Email_B)">
                                    <path id="Path_1444" data-name="Path 1"
                                        d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                                        transform="translate(-918 -492)" />
                                    <path id="Path_24" data-name="Path 2"
                                        d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                                        transform="translate(-918 -492)" />
                                </g>
                            </svg>
                            <p><span class="email_peru"></span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="footer-p-3 rights">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <p>©Copyright SUDECAP Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
</div>`
    const phone = `13113033`,phone_2 = `310 3695000`, email = `ingenieria@sudecap.com`, address = `Carrera 57B BIS No. 71 - 23, Bogotá`
    const phone_peru = `+51 1 4897087`, email_peru = `jerson.roldan@sudecap.com.pe`, address_peru = `Dir: Av. Las Nazarenas 642, Oficina 301, Lima`

    $(document).ready(function () {
        // components
        $('header').html(Header).css("background", "#000");
        $('footer').html(Footer)
        // attributes
        $('span.address').html(address)
        $('span.phone').html(phone)
        $('span.email').html(email)
        $('.attr_whatsapp').attr('href', SOCIAL_MEDIA.whatsapp)
        $('.phone_2').html(phone_2)
        $('.phone_peru').html(phone_peru)
        $('.email_peru').html(email_peru)
        $('.address_peru').html(address_peru)
    });

    // Animation on scroll
    AOS.init({
        once: true,
    });

    // What we build
    $(".wwb-ul li").hover(function () {
        $(".wwb-ul li").removeClass("active");
        $(this).addClass("active");
    });

    $('.mobile-nav .menu-item-has-children').on('click', function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
    });


    $("body").on("click", "#mobile-menu", function () {
        $(this).toggleClass('open');
        $('#mobile-nav').toggleClass('open');
    });
    $("body").on("click", "#desktop-menu", function () {
        $(this).toggleClass('open');
        $('.desktop-menu').toggleClass('open');
    });

    $('#res-cross').click(function () {
        $('#mobile-nav').removeClass('open');
        $('#mobile-menu').removeClass('open')
    });

    // PD Gallery
    $('.li-pd-imgs').on('click', function () {

        var img_src = "";

        $('.li-pd-imgs.nav-active').removeClass('nav-active');

        $(this).addClass('nav-active');

        img_src = $(this).find('img').attr('src');

        $('#NZoomContainer').children('img').attr('src', img_src);

    });



    // Preloader
    // if ($("body")[0]){
    //     $(window).on('load', function () {
    //         $('#preloader').css("display", "none");
    //         console.log("yes")
    //     });
    // }



    // Cart Popup
    if ($(".pr-cart")[0]) {
        $('.pr-cart').on('click', function () {
            $('.cart-popup').toggleClass('show-cart');
        });
    }

    // Location Map Pin
    if ($(".map-pin")[0]) {
        $('.map-pin').on('mouseover', function () {
            $('.map-pin').toggleClass('active');
            console.log("yes")
        });
    }

    // Sticky Header
    var new_scroll_position = 0;

    var last_scroll_position;

    var header = document.getElementById("stickyHeader");



    window.addEventListener('scroll', function (e) {

        last_scroll_position = window.scrollY;



        // Scrolling down

        if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {

            // header.removeClass('slideDown').addClass('slideUp');

            header.classList.remove("slideDown");

            header.classList.add("slideUp");



            // Scroll top

        }

        else if (last_scroll_position < 100) {

            header.classList.remove("slideDown");

        }

        else if (new_scroll_position > last_scroll_position) {

            header.classList.remove("slideUp");

            header.classList.add("slideDown");

        }



        new_scroll_position = last_scroll_position;

    });

});

// Preloader
$(window).on('load', function () {
    $("body").addClass("page-loaded");
    console.log("loaded")
});