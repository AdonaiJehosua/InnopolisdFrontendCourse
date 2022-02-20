'use strict';
// Первый инпут сделаем так
let formButton = document.querySelector('.form__button');
let emailInput = document.querySelector('.form__email-input');
let emailEmptyError = document.querySelector('.form__error-email-message-empty');
let emailStarError = document.querySelector('.form__email-star');
let passContainer = document.querySelector('.form__pass');
let checkboxWrapper = document.querySelector('.form__checkbox-wrapper');
let emailInvalidError = document.querySelector('.form__error-email-message-invalid');
let goodEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

formButton.addEventListener('click', emailValidation);
let emailValid;
function emailValidation(event) {
    if (emailInput.value === '') {
        emailInput.style.borderColor = 'red';
        emailStarError.style.color = 'red';
        emailInvalidError.style.display = 'none';
        emailEmptyError.style.display = 'block';
        passContainer.style.top = '206px';
        checkboxWrapper.style.top = '280px';
        emailValid = false;
    } else if
    (!goodEmail.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
        emailStarError.style.color = 'red';
        emailEmptyError.style.display = 'none';
        emailInvalidError.style.display = 'block';
        passContainer.style.top = '206px';
        checkboxWrapper.style.top = '280px';
        emailValid = false;
    } else {
        emailInput.style.borderColor = '#787878';
        emailStarError.style.color = '#787878';
        emailEmptyError.style.display = 'none';
        emailInvalidError.style.display = 'none';
        passContainer.style.top = '193px';
        checkboxWrapper.style.top = '258px';
        emailValid = true;
    }
    event.preventDefault();
}

// Второй инпут сделаем этак

formButton.addEventListener('click', passValidation);
let passValid;
function passValidation(event) {
    if (document.querySelector('.form__pass-input').value === '') {
        document.querySelector('.form__pass-input').classList.add('form__error-border-color');
        document.querySelector('.form__pass-star').classList.add('form__error-fontcolor');
        document.querySelector('.form__checkbox-wrapper').classList.add('form__checkbox-wrapper-offset');
        document.querySelector('.form__error-pass-message-invalid').classList.remove('form__error-invalid-show-message');
        document.querySelector('.form__error-pass-message-empty').classList.add('form__error-empty-show-message');
        passValid = false;

    } else if
    (document.querySelector('.form__pass-input').value.length < 8) {
        document.querySelector('.form__pass-input').classList.add ('form__error-border-color');
        document.querySelector('.form__pass-star').classList.add('form__error-fontcolor');
        document.querySelector('.form__checkbox-wrapper').classList.add('form__checkbox-wrapper-offset');
        document.querySelector('.form__error-pass-message-empty').classList.remove('form__error-empty-show-message');
        document.querySelector('.form__error-pass-message-invalid').classList.add('form__error-invalid-show-message');
        passValid = false;
    } else {
        document.querySelector('.form__pass-input').classList.remove('form__error-border-color');
        document.querySelector('.form__pass-star').classList.remove('form__error-fontcolor');
        document.querySelector('.form__checkbox-wrapper').classList.remove('form__checkbox-wrapper-offset');
        document.querySelector('.form__error-pass-message-empty').classList.remove('form__error-empty-show-message');
        document.querySelector('.form__error-pass-message-invalid').classList.remove('form__error-invalid-show-message');
        passValid = true;
    }
    event.preventDefault();
}

// Чекбоксину сделаем еще как-нибудь... например, найдем элемент через идентификатор

formButton.addEventListener('click', checkboxValidation);
let checkboxValid;
function checkboxValidation(event) {
    if (!document.getElementById('input-checkbox').checked) {
        document.querySelector('.form__checkbox-mark').classList.add('form__error-border-color');
        document.querySelector('.form__error-checkbox-message').classList.add('form__error-invalid-show-message');
        document.querySelector('.form__checkbox-star').classList.add('form__error-fontcolor');
        checkboxValid = false
    } else {
        document.querySelector('.form__checkbox-mark').classList.remove('form__error-border-color');
        document.querySelector('.form__error-checkbox-message').classList.remove('form__error-invalid-show-message');
        document.querySelector('.form__checkbox-star').classList.remove('form__error-fontcolor');
        checkboxValid = true;
    }
    event.preventDefault();
}

formButton.addEventListener('click', sendUserData);



function sendUserData(event) {
    if ((emailValid === true) && (passValid === true) && (checkboxValid === true)) {
        let userData = {
            email: document.querySelector('.form__email-input').value,
            password: document.querySelector('.form__pass-input').value
        };
        console.log(userData);
    }
    event.preventDefault();
}

