(function() {

    let 
        d = document,
        btn = Array.from(d.getElementsByClassName('btn')),
        p = Array.from(d.getElementsByClassName('info-hidden'));
    

        console.log(btn);

    btn.forEach(el => {
        el.addEventListener('click', function btnClick() {
            //It return the index of the btn clicked that will I use to show the <p> hidden
            let i = btn.indexOf(el);
            el.classList.toggle('btn-up');
            p[i].classList.remove('p-hide');
            p[i].classList.toggle('info-show');
        })
    });
    
})()