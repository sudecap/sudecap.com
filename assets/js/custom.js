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
                    <a href="/" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                        class="theme-btn simple">Escribenos
                    </a>
                </div>
            </div>
        </div>
        <div class="mobile-nav" id="mobile-nav">
            <div class="res-log">
                <a href="index.html">
                    <img src="assets/images/Builty-Logo.svg" alt="Responsive Logo">
                </a>
            </div>
            <ul>
                <li class="menu-item-has-children">
                    <a href="javascript:void(0)">Home</a>
                    <ul class="sub-menu">
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="index-2.html">Home Two</a></li>
                        <li><a href="index-3.html">Home Three</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <a href="javascript:void(0)">About</a>
                    <ul class="sub-menu">
                        <li><a href="about.html">About Company</a></li>
                        <li><a href="core-values.html">Core Values</a></li>
                        <li><a href="leadership.html">Leadership</a></li>
                        <li><a href="history.html">History</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="JavaScript:void(0)">Shop</a>
                    <ul class="sub-menu">
                        <li class="menu-item-has-children">
                            <a href="javascript:void(0)">Our Products</a>
                            <ul class="sub-menu">
                                <li><a href="product-list.html">Product List</a></li>
                                <li><a href="product-grid.html">Product Grid</a></li>
                            </ul>
                        </li>
                        <li><a href="product-detail.html">Product Details</a></li>
                        <li><a href="cart.html">Shop Cart</a></li>
                        <li><a href="checkout.html">Cart Checkout</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="JavaScript:void(0)">Pages</a>
                    <ul class="sub-menu">
                        <li class="menu-item-has-children">
                            <a href="javascript:void(0)">Services</a>
                            <ul class="sub-menu">
                                <li><a href="services.html">what we do</a></li>
                                <li><a href="service-detail.html">Service Detail</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="javascript:void(0)">Projects</a>
                            <ul class="sub-menu">
                                <li><a href="our-projects-1.html">Our Projects One</a></li>
                                <li><a href="our-projects-2.html">Our Projects Two</a></li>
                                <li><a href="project-detail.html">Project Detail</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="javascript:void(0)">Team</a>
                            <ul class="sub-menu">
                                <li><a href="our-team.html">Our Team</a></li>
                                <li><a href="team-detail.html">Team Detail</a></li>
                            </ul>
                        </li>
                        <li><a href="login.html">Login & Register</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <a href="javascript:void(0)">News</a>
                    <ul class="sub-menu">
                        <li><a href="our-blog-1.html">Our Blog One</a></li>
                        <li><a href="our-blog-2.html">Our Blog Two</a></li>
                        <li><a href="blog-detail.html">Blog Detail</a></li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
            <a href="JavaScript:void(0)" id="res-cross"></a>
        </div>
        <div class="mobile-nav desktop-menu">
            <h2>We Build Building and Great Homes.</h2>
            <p class="des">We successfully cope with tasks of varying complexity, provide long-term guarantees
                and
                regularly master new technologies.</p>
            <figure>
                <img src="assets/images/desktop-menu-img.jpg" alt="Desktop Menu Image">
            </figure>
            <h3>Get in touch</h3>
            <p class="num">(+380) 50 318 47 07</p>
            <p class="adrs">65 Allerton Street 901 N Pitt Str, Suite 170, VA 22314, USA</p>
            <div class="social-medias">
                <a href="javascript:void(0)">Facebook</a>
                <a href="javascript:void(0)">Twitter</a>
                <a href="javascript:void(0)">Linkedin</a>
            </div>
        </div>
    </div>
    </div>
    `;
    $(document).ready(function () {
        var tag_header = $('header')
        tag_header.html(Header)
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