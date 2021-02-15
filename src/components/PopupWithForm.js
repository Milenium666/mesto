import { Popup } from "./Popup.js";
import {closeButtonAddPlace, formAddPlace, formAddPlaceValidator} from '../pages/index.js'


export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
    }

    _getInputValues() {

    }

    close() {
        super.close();
        formAddPlace.reset();
        formAddPlaceValidator.resetValidation();

    }

    setEventListeners() {
        super.setEventListeners();
        closeButtonAddPlace.addEventListener('click', () => {
            this.close();
        });
    }
}