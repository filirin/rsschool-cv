let burger = document.querySelector('.burger-button');
let nav = document.querySelector('.header-nav');
let span_1 = document.querySelector('.span-1');
let span_2 = document.querySelector('.span-2');
let span_3 = document.querySelector('.span-3');


burger.addEventListener('click', function() {
    nav.classList.toggle('active');
    span_1.classList.toggle('cross-1');
    span_2.classList.toggle('cross-2');
    span_3.classList.toggle('cross-3');
    
    
}); 