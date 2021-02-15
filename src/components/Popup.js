export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        popup.classList.add('popup_opened');
        this.setEventListeners()
    }

    close() {
        const popup = document.querySelector('.popup_opened');
        popup.classList.remove('popup_opened');
        this._setRemoveEventListeners();
    }

    _handleEscClose(event) {
        if(event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        document.addEventListener('keydown', () => {
            this._handleEscClose();
        })
    }

    _setRemoveEventListeners() {
        document.removeEventListener('keydown', () => {
            this._handleEscClose();
        })
    }
}