import {showPopupImage} from './index.js'

export class Card {

    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }


    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.photo-grid__card')
        .cloneNode(true);

        return cardElement;
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListener();

        this._element.querySelector('.photo-grid__image').src = this._link;
        this._element.querySelector('.photo-grid__place').textContent = this._name;

        return this._element;
    }

    _setEventListener() {
        this._element.querySelector('.photo-grid__detete').addEventListener('click', () => {
            this._removeCard();
        });

        this._element.querySelector('.photo-grid__like').addEventListener('click', () => {
            this._handleBtnLike();
        });

        this._element.querySelector('.photo-grid__image').addEventListener('click', showPopupImage);
    }

    _removeCard() {
        this._element.closest('.photo-grid__card').remove();
    }

    _handleBtnLike() {
        this._element.querySelector('.photo-grid__like').classList.toggle('photo-grid__like_active');
    }



}