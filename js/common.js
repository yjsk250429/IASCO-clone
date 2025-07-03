const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const MainMenu = () => {
    const $menu = getAll('#header .inner .nav .gnb > li > a');
    const $lis = getAll('#header .inner .nav .gnb > li');
    const $gnbs = getAll('#header .inner .nav .gnb > li > ul');

    $menu.forEach((menutxt, idx) => {
        menutxt.addEventListener('click', (e) => {
            $lis.forEach((txt) => {
                txt.classList.remove('on');
            });
            $lis[idx].classList.add('on');
        });
    });

    $lis.forEach((item, idx) => {
        item.addEventListener('mouseenter', (e) => {
            if ($gnbs[idx]) {
                $gnbs[idx].classList.add('on');
                $gnbs[idx].animate({ opacity: [0, 1] }, 300);
            }
        });
        item.addEventListener('mouseleave', (e) => {
            if ($gnbs[idx]) {
                $gnbs[idx].animate({ opacity: [1, 0] }, 300).finished.then(() => {
                    $gnbs[idx].classList.remove('on');
                });
            }
        });
    });
};

const MainBanner = () => {
    const $bns = getAll('#visual .banner li');
    const $pageTotal = get('#visual .inner .page-num span:last-child');
    const $pageCount = get('#visual .inner .page-num span:first-child');
    const $dots = getAll('#visual .inner .dots li');

    let cnt = 0,
        timer = null,
        interval = 5000,
        total = $bns.length;

    $pageTotal.textContent = `${total > 9 ? total : '0' + total}`;
    $pageCount.textContent = `${total > 9 ? cnt + 1 : '0' + (cnt + 1)}`;

    const bannerSet = () => {
        $bns.forEach((bn) => {
            bn.classList.remove('on');
            $dots.forEach((dot) => {
                dot.classList.remove('on');
            });
        });
        $bns[cnt].classList.add('on');
        $dots[cnt].classList.add('on');
        $pageCount.textContent = `${total > 9 ? cnt + 1 : '0' + (cnt + 1)}`;
    };

    const make = () => {
        cnt++;
        if (cnt > total - 1) cnt = 0;
        bannerSet();
    };

    timer = setInterval(make, interval);

    $dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
            cnt = idx;
            bannerSet();
            clearInterval(timer);
            timer = setInterval(make, interval);
        });
    });
};

const topbar = () => {
    const $topbtn = get('#wrap .top');
    const $header = get('#header');
    const $contact = get('.contact');
    const $allMenu = get('.all-menu');
    const $popUp = get('#sitemap-wrap');
    const $wrap = get('#wrap');
    const $span1 = get('.all-menu span:nth-child(1)');
    const $span2 = get('.all-menu span:nth-child(2)');
    const $span3 = get('.all-menu span:nth-child(3)');

    let ty = 0,
        isOpen = false;

    window.addEventListener('scroll', (e) => {
        if (isOpen) return;

        ty = window.scrollY;

        if (ty > 100) {
            $header.classList.add('on');
            $contact.classList.add('on');
        } else {
            $header.classList.remove('on');
            $contact.classList.remove('on');
        }

        if (ty > 200) {
            $topbtn.classList.add('on');
        } else {
            $topbtn.classList.remove('on');
        }
    });

    $allMenu.addEventListener('click', (e) => {
        isOpen = !isOpen;

        if (isOpen) {
            $popUp.classList.add('on');
            $popUp.animate({ opacity: [0, 1] }, 200);
            $span1.style.transform = 'translateX(6px) rotate(45deg)';
            $span3.style.transform = 'translateX(6px) rotate(-45deg)';
            $span2.style.opacity = '0';
          } else {
            $span1.style.transform = 'rotate(0deg)';
            $span3.style.transform = 'rotate(0deg)';
            $span2.style.opacity = '1';
            $popUp.animate({ opacity: [1, 0] }, 200).finished.then(() => {
            $popUp.classList.remove('on');
            })
          }
        $wrap.classList.toggle('on', isOpen);
        $contact.classList.toggle('on', isOpen);
    });

    $topbtn.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

(() => {
    topbar();
    MainBanner();
    MainMenu();
})();
