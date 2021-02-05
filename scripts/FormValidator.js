export const validationConfig = {
    formSelector: '.popup__data-container',
    inputSelector: '.popup__data',
    submitButtonSelector: '.popup__button-save',
    buttonInvalidClass: 'popup__button-save_disabled',
    inputInvalidClass: 'popup__data_invalid',
    errorClass: 'error',
}


export class FormValidator {


    constructor(config, form) {
        this._form = form;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._buttonInvalidClass = config.buttonInvalidClass;
        this._inputInvalidClass = config.inputInvalidClass;
        this._errorClass = config.errorClass;
    }

    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._inputInvalidClass);
    }


    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._inputInvalidClass);
    }

    _checkInputValidity(input) {

        if(!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }



    setButtonState(button, isActive) {
        if(isActive) {
            button.classList.remove(this._buttonInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(this._buttonInvalidClass);
            button.disabled = true;
        }
    }


    _setIventListeners() {
        this._inputsList = this._form.querySelectorAll(this._inputSelector);

        this._inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this.setButtonState(this._submitButton, this._form.checkValidity());
            });
        });
    }

    enableValidation() {
        this._setIventListeners();

        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this.setButtonState(this._submitButton, this._form.checkValidity());

    }
}