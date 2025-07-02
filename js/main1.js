
const con1 = () => {
    const $lis = getAllAll('.main .con1 .inner .service-wrap ul li');
    const $prev = get('.main .con1 .inner .btns .prev');
    const $next = get('.main .con1 .inner .btns .next');

    let total = $lis.length,
        cnt = 0,
        size = 470;

    $next.addEventListener('click', (e) => {
        cnt = (cnt + 1) % total;
        $lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(${((idx - cnt + total) % total) * size}px)`;
            con.style.zIndex = 10 - ((idx - cnt + total) % total) * size;
        });
    });
    $prev.addEventListener('click', (e) => {
        cnt = (cnt - 1 + total) % total;
        $lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(${((idx - cnt + total) % total) * size}px)`;
            con.style.zIndex = 10 - ((idx - cnt + total) % total) * size;
        });
    });
};