import { Popup } from "./Popup.js";

import {popupImage, popupImageTitle} from '../pages/index.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(event) {
        super.open();
        const openCard = event.target.closest('.photo-grid__card');

        const cardImage = openCard.querySelector('.photo-grid__image');
        const cardTitle = openCard.querySelector('.photo-grid__discription');

        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardTitle.textContent;
    }
}