

export class UserInfo {
    constructor(userNameSelector, userDescriptionSelector) {
        this._userNameSelector = userNameSelector;
        this._userDescriptionSelector = userDescriptionSelector;
        this._nameInput = document.querySelector('.popup__data_type_name');
        this._jobInput = document.querySelector('.popup__data_type_job');
    }

    getUserInfo() {
        this._nameInput.value = this._userNameSelector.textContent;
        this._jobInput.value = this._userDescriptionSelector.textContent;
    }

    setUserInfo(nameInput, jobInput) {
        this._userNameSelector.textContent = nameInput.value;
        this._userDescriptionSelector.textContent = jobInput.value;
    }
}