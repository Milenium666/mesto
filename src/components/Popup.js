export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupClickHandler = this._popupClickHandler.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._popupClickHandler)
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._popupClickHandler)
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
        
    }


}