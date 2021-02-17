export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupClickHandler = this._popupClickHandler.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.addEventListener('click', this._popupClickHandler)
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._popupClickHandler);
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose(event) {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    _popupClickHandler(event) {
        if(event.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', this.close);
    }


}