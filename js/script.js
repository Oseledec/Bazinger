// Burger btn
let burgerBtn = document.querySelector('#burgerBtn');
let burgerMenu = document.querySelector('#burgerMenu');

burgerBtn.addEventListener('click', () =>{
    burgerBtn.classList.toggle('burger__btn--active');
    burgerMenu.classList.toggle('burger__menu--active');
});

let body = document