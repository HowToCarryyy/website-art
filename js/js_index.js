const hamburger = document.querySelector('.hamburger');
const mmenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mmenu.classList.toggle('is-active');
});

window.addEventListener('resize', function() {
    if (hamburger.className == ('hamburger is-active')){
        if (window.innerWidth >= 768){
            mmenu.classList.remove('is-active');
        }
        if (window.innerWidth <= 760){
            mmenu.classList.add('is-active');
        }
    }
});