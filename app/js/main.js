const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const mobileBack = document.querySelector('.mobile-back');
const overlay = document.querySelector('.overlay');
// inputmask variables
const form = document.querySelector('.form__body');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');

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
    }

    if(e.target.classList.contains('mobile-back__link')) {
        e.preventDefault();
        e.target.closest('.menu__list--dropdown').classList.remove('transformation');
        e.target.closest('.menu').querySelector('.menu__list').classList.remove('transformation');
    }
});


// inputmask
inputMask.mask(telSelector);

// justValidate 
new window.JustValidate('.form__body', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        }
    },
    messages: {
        name: {
            required: 'Введите ваше имя',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 20 символов'
        },
        tel: {
            required: 'Введите телефон',
            function: 'Здесь должно быть 10 символов без +7'
        },
        email: {
            required: 'Введите email',
            email: 'Введите корректный email'
        }
    },
    submitHandler: function (thisForm) {
        
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log('Отправлено');
              }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
      
        thisForm.reset();
    }
});