import {nameInput, jobInput} from '../constants/constants.js'

export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector}) {
        this._name = userNameSelector;
        this._job = userDescriptionSelector;
    }

    getUserInfo() {
        this._name.textContent = nameInput.value;
        this._job.textContent = jobInput.value;
    }

    setUserInfo() {
        nameInput.value = this._name.textContent;
        jobInput.value = this._job;
    }
}