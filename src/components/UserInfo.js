import {nameInput, jobInput} from '../constants/constants.js'

export class UserInfo {
    constructor(userNameSelector, userDescriptionSelector) {
        this._name = userNameSelector;
        this._job = userDescriptionSelector;
    }

    getUserInfo() {
        nameInput.value = this._name.textContent;
        jobInput.value = this._job.textContent;
    }

    setUserInfo() {
        this._name.textContent = nameInput.value;
        this._job.textContent = jobInput.value;
    }
}