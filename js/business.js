const veiwService = ()=>{
    const $con2 = get('.main .con2');
    const $con3 = get('.main .con3');
    const $con4 = get('.main .con4');
    const $con5 = get('.main .con5');
    const $con6 = get('.main .con6');
    const $con7 = get('.main .con7');
    const $con8 = get('.main .con8');
    const $con9 = get('.main .con9');
    const $con10 = get('.main .con10');
    const $con11 = get('.main .con11');
    const $menu = getAll('.main .con1 ul li');

    let ty=0,
        gap=150;

    $menu[0].addEventListener('click', (e)=>{
        ty=$con2.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[1].addEventListener('click', (e)=>{
        ty=$con3.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[2].addEventListener('click', (e)=>{
        ty=$con4.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[3].addEventListener('click', (e)=>{
        ty=$con5.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[4].addEventListener('click', (e)=>{
        ty=$con6.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[5].addEventListener('click', (e)=>{
        ty=$con7.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[6].addEventListener('click', (e)=>{
        ty=$con8.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[7].addEventListener('click', (e)=>{
        ty=$con9.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[8].addEventListener('click', (e)=>{
        ty=$con10.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menu[9].addEventListener('click', (e)=>{
        ty=$con11.offsetTop-gap;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });

};

(()=>{
    veiwService();
})();