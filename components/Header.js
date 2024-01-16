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