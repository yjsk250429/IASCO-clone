const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
};

const con1_service = () => {
    const $lis = getAll('.main .con1 .inner .service-wrap ul li');
    const $prev = get('.main .con1 .inner .btns .prev');
    const $next = get('.main .con1 .inner .btns .next');
    // const $fullLine = get('.main .con1 .inner .line-wrap');
    const $moveLine = get('.main .con1 .inner .line-wrap .line');

    let cnt = 0,
        Lcnt= 0,
        size = 470,
        max = 3760,
        Lsize=140,
        Lmax =1000;
    
    $next.addEventListener('click', (e) => {
        if(cnt +size < max)
            cnt += size;
            $lis.forEach((con, idx) => {
                con.style.transition = 'transform 0.2s';
                con.style.transform = `translateX(-${cnt}px)`;
            });
        if(Lcnt + Lsize < Lmax)
            Lcnt+=Lsize;
            $moveLine.style.transition = 'transform 0.2s';
            $moveLine.style.transform = `translateX(${Lcnt}px)`;
    });
    $prev.addEventListener('click', (e) => {
        if(cnt-size>=0)
        cnt -= size;
        $lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(-${cnt}px)`;
        });
        if(Lcnt - Lsize >= 0)
            Lcnt-=Lsize;
            $moveLine.style.transition = 'transform 0.2s';
            $moveLine.style.transform = `translateX(${Lcnt}px)`;
    }); 
};


const con2_partners = () => {
    const $prev = get('.main .con2 .inner .btns .prev');
    const $next = get('.main .con2 .inner .btns .next');
    const $box = get('.main .con2 .inner ul');

    let size = 259,
        cnt = 0,
        max=2200;

    $next.addEventListener('click', (e) => {
        if(cnt +size < max)
            cnt += size;
            $box.style.transition = 'transform 0.3s';
            $box.style.transform = `translateX(-${cnt}px)`;
    });
    $prev.addEventListener('click', (e) => {
        if(cnt - size >= 0)
            cnt -= size;
            $box.style.transition = 'transform 0.3s';
            $box.style.transform = `translateX(-${cnt}px)`;
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

(()=>{
    preventDefaultAnchor(); 
    con1_service();
    con2_partners();
    con3_sel();
})();