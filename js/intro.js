const subNavOpne1 = ()=>{
    const $subNav = get('.main .subMenu-bar .inner .sub1 ul');
    const $dropBtn = get('.main .subMenu-bar .inner .sub1');
    const $arrow = get('.main .subMenu-bar .inner .sub1 i');

    $dropBtn.addEventListener('click',(e)=>{
        if (!$subNav.classList.contains('on')) {
            $subNav.classList.add('on');
            $subNav.animate({ opacity: [0, 1] }, 300);
            $arrow.style.transform = 'scaleY(-1)';
          } else {
            $arrow.style.transform = 'scaleY(1)';
            $subNav.animate({ opacity: [1, 0] }, 300).finished.then(() => {
            $subNav.classList.remove('on');
            
        })};            
    });    
};

const subNavOpne2 = ()=>{
    const $subNav = get('.main .subMenu-bar .inner .sub2 ul');
    const $dropBtn = get('.main .subMenu-bar .inner .sub2');
    const $arrow = get('.main .subMenu-bar .inner .sub2 i');

    $dropBtn.addEventListener('click',(e)=>{
        if (!$subNav.classList.contains('on')) {
            $subNav.classList.add('on');
            $subNav.animate({ opacity: [0, 1] }, 300);
            $arrow.style.transform = 'scaleY(-1)';
          } else {
            $arrow.style.transform = 'scaleY(1)';
            $subNav.animate({ opacity: [1, 0] }, 300).finished.then(() => {
            $subNav.classList.remove('on');
            
        })};            
    });    
};

(()=>{
    subNavOpne1();
    subNavOpne2();
})();