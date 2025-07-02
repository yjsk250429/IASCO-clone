const subNavOpne = ()=>{
    const $subNav = get('.main .subMenu-bar .inner .subNav ul');
    const $dropBtn = get('.main .subMenu-bar .inner .subNav');
    const $arrow = get('.main .subMenu-bar .inner .subNav i');

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
    subNavOpne();
})();
