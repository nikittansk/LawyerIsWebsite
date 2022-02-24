const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const mobileBack = document.querySelector('.mobile-back');
const overlay = document.querySelector('.overlay');

// const scrollTop = () => {
//     menu.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }

const initialMenu = () => {
    document.querySelector('.menu__list--dropdown').classList.remove('transformation');
    document.querySelector('.menu').querySelector('.menu__list').classList.remove('transformation');
}

burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    initialMenu();
});

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
});

menu.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu__list-link--drop')) {
        e.preventDefault();
        e.target.closest('.menu__list').classList.add('transformation');
        e.target.closest('.menu__list-item').querySelector('.menu__list--dropdown').classList.add('transformation');
        // scrollTop();
    }

    if(e.target.classList.contains('mobile-back__link')) {
        e.preventDefault();
        e.target.closest('.menu__list--dropdown').classList.remove('transformation');
        e.target.closest('.menu').querySelector('.menu__list').classList.remove('transformation');
        // scrollTop();
    }

    // if(e.target.classList.contains('menu__list-link') && !e.target.classList.contains('menu__list-link--drop')) {
    //     e.preventDefault();
    //     menu.classList.remove('open');
    //     overlay.classList.remove('open');
    // }
});