document.getElementById("mobile-view-nav").innerHTML=`
    <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

    <div class="logo-box">
        <a href="index.html" aria-label="logo image"><img src="assets/images/resources/logo-2.png" alt="" /></a>
    </div>
    <!-- /.logo-box -->
    <div class="mobile-nav__container"></div>
    <!-- /.mobile-nav__container -->

    <ul class="mobile-nav__contact list-unstyled">
        <li>
            <i class="fa fa-envelope"></i>
            <a href="mailto:bibletouradventure@gmail.com">bibletouradventure@gmail.com</a>
        </li>
        <li>
            <i class="fa fa-phone-alt"></i>
            <a href="tel:09132622924">09132622924</a>
        </li>
    </ul><!-- /.mobile-nav__contact -->
    <div class="mobile-nav__top">
        <div class="mobile-nav__social">
            <a href="index2-one-page.html#" class="fab fa-twitter"></a>
            <a href="index2-one-page.html#" class="fab fa-facebook-square"></a>
            <a href="index2-one-page.html#" class="fab fa-pinterest-p"></a>
            <a href="index2-one-page.html#" class="fab fa-instagram"></a>
        </div><!-- /.mobile-nav__social -->
    </div><!-- /.mobile-nav__top -->
`;

document.getElementById("nav").innerHTML=`
    <div class="main-menu-two-wrapper__main-menu">
        <a href="index2-one-page.html#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
        <ul class="main-menu__list one-page-scroll-menu">
            <li class="current scrollToLink" data-scroll-offset="0">
                <a href="index.html">Home</a>
            </li>
            <li class="scrollToLink" data-scroll-offset="60">
                <a href="about.html">About BTA</a>
            </li>
            <li class="scrollToLink" data-scroll-offset="60">
                <a href="join-program.html">How to Join</a>
            </li>
            <li class="scrollToLink" data-scroll-offset="60">
                <a href="leadership.html">Leadership & Workforce</a>
            </li>
            <li class="scrollToLink" data-scroll-offset="60">
                <a href="support.html">Support The BTA Vision</a>
            </li>
            <li class="scrollToLink" data-scroll-offset="60">
                <a href="testimonies.html">Testimonies & Graduates</a>
            </li>
            <li class="scroll-to-target" data-scroll-offset="60">
                <a href="#contact">Contact Us</a>
            </li>
        </ul>
    </div>
                            <!-- <div class="main-menu-two-wrapper__right">
                                <div class="main-menu-two__top-social">
                                    <a href="index2-one-page.html#"><i class="fab fa-twitter"></i></a>
                                    <a href="index2-one-page.html#"><i class="fab fa-facebook"></i></a>
                                    <a href="index2-one-page.html#"><i class="fab fa-pinterest-p"></i></a>
                                    <a href="index2-one-page.html#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div> -->
`;