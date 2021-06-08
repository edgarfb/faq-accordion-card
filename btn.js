(function() {

    let 
        d = document,
        cardFaqBox = Array.from(d.getElementsByClassName('card-faq-box'));
        btn = Array.from(d.getElementsByClassName('btn')),
        p = Array.from(d.getElementsByClassName('info-hidden')),
        faqTitle = Array.from(d.getElementsByClassName('faq-title'));
    
    cardFaqBox.forEach(function faqEvent(el) {
        el.addEventListener('click', function faqClick() {
            //It return the index of the cardFaqBox clicked that will I use to show the <p> hidden and switch the arrow up and down
        
            let i = cardFaqBox.indexOf(el);
            // switch arrow up and down
            btn[i].classList.toggle('btn-up');

            p[i].classList.remove('p-hide');

            p[i].classList.toggle('info-show');
            
            // change color of h3 element
            faqTitle[i].classList.toggle('title-selected');
        });
    })

    
})()