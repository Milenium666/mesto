import { Popup } from "./Popup.js";
import {popupImage, popupImageTitle} from '../constants/constants.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(openCard) {
        console.log(openCard);
        // const openCard = event.target.closest('.photo-grid__card');

        const cardImage = openCard.querySelector('.photo-grid__image');
        const cardTitle = openCard.querySelector('.photo-grid__discription');

        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardTitle.textContent;
        super.open();
    }
}