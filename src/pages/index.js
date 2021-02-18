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
    jobInput,
    nameInput
} from '../constants/constants.js'

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

const placeForm = new PopupWithForm(placeSelector, () => {

})

// const placeForm = new PopupWithForm(placeSelector,  (data) => {
//     const item = {
//         name: data.name-place,
//         link: data.pic-link
//                 };

//     const cardElement = new Card(item, template, () =>{
//         const popupWithImage = new PopupWithImage('#show-image');
//         popupWithImage.setEventListeners();
//         popupWithImage.open();
//     }).createCard(item);

//     container.prepend(cardElement)

// })

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




// const placeForm = new PopupWithForm(placeSelector, {
//     formSubmit = (data) => {
//         const item = {
//             name: data.name-place,
//             link: data.pic-link}}}
//             )

// function addCard(container, cardElement) {
//     container.prepend(cardElement);
// }

// function submitFormData (event) {
//     event.preventDefault();

//     name.textContent = nameInput.value;
//     job.textContent = jobInput.value;

//     closePopup(event);
// }

// form.addEventListener('submit', submitFormData);

// // Слушатель формы добавления карточки
// formAddPlace.addEventListener('submit', submitFormAddPlace);

// export function submitFormAddPlace (event) {
//     event.preventDefault();

//     const dataPlace = {};

//     dataPlace.name  = formAddPlace.querySelector('.popup__data_type_name-place').value;
//     dataPlace.link = formAddPlace.querySelector('.popup__data_type_pic-link').value;

//     addCard(container, createCards(dataPlace));


//     formAddPlace.reset();

//     closePopup(event);

// }

















