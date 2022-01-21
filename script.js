let mainMenu = document.querySelector('.header-list');
let mainHamburger = document.querySelector('.hamburger');

mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle('header-list-active')
    mainHamburger.classList.toggle('hamburger-active')
})

let menuLinks = document.querySelectorAll('.link');

for (let menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        let scrollToElem = menuLink.getAttribute('href');
        mainMenu.classList.toggle('header-list-active');
        let coordinates = document.querySelector(scrollToElem).offsetTop;
        window.scrollTo({
            top: coordinates - 100,
            behavior: 'smooth'
        });
    })
}

let modalWindow = document.querySelector('.modal');
let modalBtns = document.querySelectorAll('.btn-modal');
let modalClose = document.querySelector('.btn-close')

for (let modalBtn of modalBtns) {
    modalBtn.addEventListener('click', () => {
        modalWindow.classList.toggle('modal-active')
    })
}
modalClose.addEventListener('click', () => {
    modalWindow.classList.toggle('modal-active')
})


$('.customers-list').slick({
    nextArrow: document.getElementsByClassName('arrow-right'),
    prevArrow: document.getElementsByClassName('arrow-left'),
    variableWidth: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });