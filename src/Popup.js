export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);

        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupClickHandler = this._popupClickHandler.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('click', this._popupClickHandler)
        this._popupElement.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('click', this._popupClickHandler);
        this._popupElement.classList.remove('popup_opened');
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _popupClickHandler(event) {
        if (event.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._button = this._popupElement.querySelector('.popup__close').addEventListener('click', this.close);
    }


}