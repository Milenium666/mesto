//Функция которая показывает ошибки
function showError (form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(config.inputInvalidClass);
}

//функция скрывает ошибку
function hideError (form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(config.inputInvalidClass);
}

//Функция проверяет валидность поля ввода
function checkInputValidity (form, input, config) {
    if(!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config);
    }
}

function setButtonState (button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.buttonInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(config.buttonInvalidClass);
        button.disabled = true;
    }

}



function setIventListeners (form, config) {

    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity (form, input, config);
            setButtonState (submitButton, form.checkValidity(), config);
        });
    });
}

function enableValidation (config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setIventListeners(form, config);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        const submitButton = form.querySelector(config.submitButtonSelector);
        setButtonState(submitButton, form.checkValidity(), config);
    });

}

// function disableValidation (form, config) {
//     form.reset();
//     const inputList = form.querySelectorAll(config.inputSelector);
//     inputList.forEach((input) => {
//         hideError(form, input, config)
//     });
// }
const validationConfig = {
    formSelector: '.popup__data-container',
    inputSelector: '.popup__data',
    submitButtonSelector: '.popup__button-save',
    buttonInvalidClass: 'popup__button-save_disabled',
    inputInvalidClass: 'popup__data_invalid',
}


enableValidation(validationConfig);



