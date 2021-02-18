import {
    Popup
} from "./Popup.js";



export class PopupWithForm extends Popup {
    constructor(popupSelector, {
        formSubmitCallBack
    }) {
        super(popupSelector);
        this._formSubmitCallBack = formSubmitCallBack
        this._submit = this._submit.bind(this)
        this._inputList = this._popupElement.querySelectorAll('.popup__data');
        this._form = this._popupElement.querySelector('.popup__data-container');

    }

    _getInputValues() {
        const data = {};
        this._inputList.forEach(input => {
            console.log(input.name);
            data[input.name] = input.value;
        })
        return data;

    }

    _submit(event) {

        event.preventDefault();
        this._formSubmitCallBack(this._getInputValues())
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', this._submit);
    }

    close() {
        super.close();
        this._form.reset();

    }


}