import { Popup } from "./Popup.js";



export class PopupWithForm extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._inputList = this._popupSelector.querySelectorAll('.popup__data');
        this._form = this._popupSelector.querySelector('.popup__data-container');
        this._inputValues = document.querySelector('.popup__button-save');
    }

    _getInputValues() {
        const data = {};
        this._inputList.forEach(input => {
            data[input.name] = input.value;
        })

        return data;
    }



    close() {
        super.close();
        this._form.reset();

    }

    setEventListeners() {
        super.setEventListeners();
        this._inputValues.addEventListener('submit', (event) => {
            event.preventDefault();
            this._formSubmit(this._getInputValues());
            
        });
        this.close();
    }
}