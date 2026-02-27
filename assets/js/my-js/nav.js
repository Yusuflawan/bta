document.getElementById("mobile-view-nav").innerHTML=`
    <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

    <div class="logo-box">
        <a href="index.html" aria-label="logo image"><img style="width: 3rem; height: 3rem;" src="assets/images/resources/BTA Logocopy.png" alt="" /></a>
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
            <a href="https://www.facebook.com/share/1CELR12DCV/"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/bible_tour_adventure?igsh=bnpveXM5bXRrMjB5"><i class="fab fa-instagram"></i></a>
            <a href="https://tiktok.com/@bibletouradventure"><i class="fab fa-tiktok"></i></a>
        </div><!-- /.mobile-nav__social -->
    </div><!-- /.mobile-nav__top -->
`;

            // <li class="current scrollToLink" data-scroll-offset="0">
            //     <a href="index.html">Home</a>
            // </li>

document.getElementById("nav").innerHTML=`
    <div class="main-menu-two-wrapper__main-menu">
        <a href="" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
        <ul class="main-menu__list one-page-scroll-menu">
            <li class="current scrollToLink logo-menu-item" data-scroll-offset="0">
                <a href="index.html" aria-label="logo image"><img style="width: 3rem; height: 3rem;" src="assets/images/resources/BTA Logocopy.png" alt="" /></a>
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
                                    <a href="https://www.facebook.com/share/1CELR12DCV/"><i class="fab fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/bible_tour_adventure?igsh=bnpveXM5bXRrMjB5"><i class="fab fa-instagram"></i></a>
                                    <a href="https://tiktok.com/@bibletouradventure"><i class="fab fa-tiktok"></i></a>
                                </div>
                            </div> -->
`;

// Ensure the current page's nav item receives the `current` class across main, sticky, and mobile menus
(function() {
    const path = window.location.pathname.split('/').pop(); // e.g. 'about.html'
    const isHome = path === '' || path === 'index.html';

    function applyToList(ul) {
        if (!ul) return;

        // Clear any existing current classes
        ul.querySelectorAll('li').forEach(li => li.classList.remove('current'));

        ul.querySelectorAll('li').forEach(li => {
            const a = li.querySelector('a');
            if (!a) return;
            const href = a.getAttribute('href') || '';

            // skip anchors (e.g., #contact)
            if (href.startsWith('#')) return;

            const hrefFile = href.split('/').pop();

            if (hrefFile === path || (isHome && (hrefFile === 'index.html' || href === ''))) {
                li.classList.add('current');
            }
        });
    }

    function applyCurrent() {
        const menuLists = document.querySelectorAll('.main-menu__list');
        if (!menuLists.length) return;
        menuLists.forEach(ul => applyToList(ul));
    }

    // initial apply
    applyCurrent();

    // re-apply whenever the sticky header content changes (it gets cloned dynamically)
    const stickyContainer = document.querySelector('.sticky-header__content');
    if (stickyContainer) {
        const mo = new MutationObserver(() => applyCurrent());
        mo.observe(stickyContainer, { childList: true, subtree: true });
    }

    // ensure current class is correct after load
    window.addEventListener('load', applyCurrent);
})();

// Inject simple responsive CSS to hide the logo menu item when the mobile toggler appears
;(function(){
    var css = '\n    @media (max-width: 767.98px){ .logo-menu-item{ display: none !important; } }\n    @media (min-width: 768px){ .logo-menu-item{ display: list-item !important; } }\n    ';
    var s = document.createElement('style');
    s.type = 'text/css';
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
})();