import {
    validationConfig,
    FormValidator
} from './FormValidator.js'
import {
    Card
} from './Card.js';
import {
    PopupWithImage
} from './PopupWithImage.js';
import {
    PopupWithForm
} from './PopupWithForm.js'
import {
    UserInfo
} from './UserInfo.js'
import {
    Section
} from './Section.js'
import {
    initialCards,
    container,
    template,
    form,
    formPlace,
    placeSelector,
    addPlaceButton,
    editSelector,
    editButton,
    name,
    job,
} from './constants/constants.js'
import './pages/index.css';

const placeForm = new PopupWithForm(placeSelector, {
    formSubmitCallBack: (item) => {
        const card = new Card(item, template, () => {
            const image = new PopupWithImage('#show-image');
            image.setEventListeners();
            image.open(cardElement);
        });

        const cardElement = card.createCard(item);
        section.addItem(cardElement);
        placeForm.close()
    }
})

const section = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, template, () => {
            const image = new PopupWithImage('#show-image');
            image.setEventListeners();
            image.open(cardElement);
        });

        const cardElement = card.createCard(item);
        section.addItem(cardElement);
    }
}, container);

section.renderItems();


const editForm = new PopupWithForm(editSelector, {
    formSubmitCallBack: (data) => {
        userInfo.setUserInfo(data)
        editForm.close()
    }
})

editForm.setEventListeners()

const userInfo = new UserInfo(name, job);

addPlaceButton.addEventListener('click', () => {
    placeForm.setEventListeners();
    formAddPlaceValidator.resetValidation();
    placeForm.open();


})

editButton.addEventListener('click', () => {
    editForm.setEventListeners();
    userInfo.getUserInfo();
    formValidator.resetValidation();
    editForm.open();
})

const formValidator = new FormValidator(validationConfig, form);
const formAddPlaceValidator = new FormValidator(validationConfig, formPlace);

formValidator.enableValidation();
formAddPlaceValidator.enableValidation();





