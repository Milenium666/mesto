import {
    validationConfig,
    FormValidator
} from '../components/FormValidator.js'
import {
    Card
} from '../components/Card.js';
import {
    PopupWithImage
} from '../components/PopupWithImage.js';
import {
    PopupWithForm
} from '../components/PopupWithForm.js'
import {
    UserInfo
} from '../components/UserInfo.js'
import {
    Section
} from '../components/Section.js'
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
    nameInput,
    jobInput
} from '../constants/constants.js'
import './index.css';




const placeForm = new PopupWithForm(placeSelector, {
    formSubmitCallBack: (item) => {
        addCard(section, createCards(item));
        placeForm.close()
    }
})

const section = new Section({
    items: initialCards,
    renderer: (item) => {
        addCard(section, createCards(item));
    }
}, container);

section.renderItems();

function addCard(section, cardElement) {
    section.addItem(cardElement);
}

const image = new PopupWithImage('#show-image');
        image.setEventListeners();

function createCards(item) {
    const card = new Card(item, template, () => {
        image.open(cardElement);
    });
    const cardElement = card.createCard(item);
    return cardElement;
}

const editForm = new PopupWithForm(editSelector, {
    formSubmitCallBack: () => {
        userInfo.setUserInfo(nameInput, jobInput)
        editForm.close()
    }
})

editForm.setEventListeners()

const userInfo = new UserInfo(name, job);
placeForm.setEventListeners();
addPlaceButton.addEventListener('click', () => {
    formAddPlaceValidator.resetValidation();
    placeForm.open();


})
editForm.setEventListeners();
editButton.addEventListener('click', () => {
    userInfo.getUserInfo();
    formValidator.resetValidation();
    editForm.open();
})

const formValidator = new FormValidator(validationConfig, form);
const formAddPlaceValidator = new FormValidator(validationConfig, formPlace);

formValidator.enableValidation();
formAddPlaceValidator.enableValidation();





