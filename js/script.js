// Burger btn
let burgerBtn = document.querySelector('#burgerBtn');
let burgerMenu = document.querySelector('#burgerMenu');

burgerBtn.addEventListener('click', () =>{
    burgerBtn.classList.toggle('burger__btn--active');
    burgerMenu.classList.toggle('burger__menu--active');
});

// Removing active burger menu on screen change more than 940px
let header = document.querySelector('.header');
addEventListener('resize', () => {
    if (header.offsetWidth > 940) {
        burgerBtn.classList.remove('burger__btn--active');
        burgerMenu.classList.remove('burger__menu--active');
    } 
});
