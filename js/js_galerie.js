const arrow_a = document.querySelector('.arrow.a');
const desc_aside_a = document.querySelector('.desc-aside.a');
const arrow_b = document.querySelector('.arrow.b');
const desc_aside_b = document.querySelector('.desc-aside.b');

arrow_a.addEventListener('click', function() {
    this.classList.toggle('is-active');
    desc_aside_a.classList.toggle('is-active');
});

arrow_b.addEventListener('click', function() {
    this.classList.toggle('is-active');
    desc_aside_b.classList.toggle('is-active');
});