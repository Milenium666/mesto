import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = document.querySelector('.popup__image');
        this._popupImageTitle = document.querySelector('.popup__description-place');
    }

    open(openCard) {
        const cardImage = openCard.querySelector('.photo-grid__image');
        const cardTitle = openCard.querySelector('.photo-grid__discription');

        this._popupImage.src = cardImage.src;
        this._popupImageTitle.textContent = cardTitle.textContent;
        super.open();
    }
}