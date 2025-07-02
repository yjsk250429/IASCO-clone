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
          } else {
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

// const con1_service = () => {
//     const $prev = get('.main .con1 .inner .service-wrap .btns .prev');
//     const $next = get('.main .con1 .inner .service-wrap .btns .next');
//     const $box = get('.main .con1 .inner .service-wrap ul');
//     const $boxLi = getAll('.main .con1 .inner .service-wrap ul li');

//     const size = 465;
//     let current = 0;

//     $next.addEventListener('click', (e) => {});
// };

//클릭 할때마다 size++ 되고, 그러다가 ul의 길이를 초과하게 되면 멈춤
const con2_partners = () => {
    const $prev = get('.main .con2 .inner .btns .prev');
    const $next = get('.main .con2 .inner .btns .next');
    const $box = get('.main .con2 .inner ul');

    let size = 259,
        current = 0;

    $next.addEventListener('click', (e) => {
        current += size;
        if (current > 3700) {
            return;
        } else {
            $box.style.left = `-${current}px`;
        }
    });
};

const con3_sel = () => {
    const $sel = getAll('.main .con3 .inner .sel li');

    $sel.forEach((item) => {
        item.addEventListener('click', (e) => {
            $sel.forEach((itemLi) => {
                itemLi.classList.remove('on');
            });
            item.classList.add('on');
        });
    });
};

const con1_service = () => {
    const $lis = getAll('.main .con1 .inner .service-wrap ul li');
    const $prev = get('.main .con1 .inner .btns .prev');
    const $next = get('.main .con1 .inner .btns .next');

    let cnt = 0,
        size = 470,
        max = 3760;

    $next.addEventListener('click', (e) => {
        if(cnt +size < max)
            cnt += size;
            $lis.forEach((con, idx) => {
                con.style.transition = 'transform 0.2s';
                con.style.transform = `translateX(-${cnt}px)`;
            });
    });
    $prev.addEventListener('click', (e) => {
        if(cnt-size>=0)
        cnt -= size;
        $lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(-${cnt}px)`;
        });
    }); 
};

const comInit = () => {
    topbar();
    MainBanner();
    MainMenu();
    con1_service();
    con2_partners();
    con3_sel();
};

(() => {
    comInit();
})();
