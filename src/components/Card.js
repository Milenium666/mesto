

export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick.bind(this);
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
        this._cardImage = this._element.querySelector('.photo-grid__image');
        this._likeButton = this._element.querySelector('.photo-grid__like');
        this._namePlace = this._element.querySelector('.photo-grid__place');


        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._namePlace.textContent = this._name;
        this._setEventListener();
        return this._element;
    }

    _setEventListener() {
        this._element.querySelector('.photo-grid__detete').addEventListener('click', () => {
            this._removeCard();
        });

        this._likeButton.addEventListener('click', () => {
            this._handleBtnLike();
        });

        this._cardImage.addEventListener('click', this._handleCardClick);
    }

    _removeCard() {
        this._element.closest('.photo-grid__card').remove();
    }

    _handleBtnLike() {
        this._likeButton.classList.toggle('photo-grid__like_active');
    }



}