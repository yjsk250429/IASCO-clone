

const noticeNum = ()=>{
    const $num = getAll('.main .con1 .inner table tbody tr');
    const $total = get('.main .con1 .inner .search p span:nth-of-type(1)');

    $total.textContent = $num.length-1;
};

(()=>{
    noticeNum();
})();
