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
    popupShowImage,
    form,
    formPlace,
    placeSelector,
    addPlaceButton,
    editSelector,
    nameInput,
    jobInput,
    editButton,
    closeButtonAddPlace
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
const editForm = new PopupWithForm(editSelector, () => {
    userInfo.getUserInfo();
})

const userInfo = new UserInfo({
    nameInput,
    jobInput
});

addPlaceButton.addEventListener('click', () => {
    placeForm.setEventListeners();
    formAddPlaceValidator.resetValidation();
    placeForm.open();


})

editButton.addEventListener('click', () => {
    editForm.setEventListeners();
    formValidator.resetValidation();
    // userInfo.setUserInfo();
    editForm.open();
})


// const placeForm = new PopupWithForm(placeSelector, {
//     formSubmit = (data) => {
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
// }
// })

// const placeForm = new PopupWithForm(placeSelector, {
//     formSubmit = (data) => {
//         const item = {
//             name: data.name-place,
//             link: data.pic-link}}}
//             )






// // создание экземпляров класса formValidation
const formValidator = new FormValidator(validationConfig, form);
const formAddPlaceValidator = new FormValidator(validationConfig, formPlace);

formValidator.enableValidation();
formAddPlaceValidator.enableValidation();


// function addCard(container, cardElement) {
//     container.prepend(cardElement);
// }









// // Отправка формы с данными потзователя
// function submitFormData (event) {
//     event.preventDefault();

//     name.textContent = nameInput.value;
//     job.textContent = jobInput.value;

//     closePopup(event);
// }



// // Слушатель для кнопки 'редактировать профиль'
// editButton.addEventListener('click', function() {

//     nameInput.value = name.textContent;
//     jobInput.value = job.textContent;

//     formValidator.resetValidation();

//     showPopup(profilePopup);

// });











// addPlaceButton.addEventListener('click', function () {
//     // очистка формы перед открытием
//     formAddPlace.reset();
//     formAddPlaceValidator.resetValidation();

//     // открытие popup'pa
//     showPopup(popupAddPlace);
//     // слушатель для кнопки закрытия popup'a

// });
// // Слушатель для кнопки 'Закрытие popup'a Добавления места'

// // Слушатель формы данных пользователя
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




// //Добавление на страницу карточек





// closeBtnShowImage.addEventListener('click', closePopup);



//     export function showPopupImage(event) {
//     showPopup(popupShowImage);
//     const openCard = event.target.closest('.photo-grid__card');

//     const cardImage = openCard.querySelector('.photo-grid__image');
//     const cardTitle = openCard.querySelector('.photo-grid__discription');

//     popupImage.src = cardImage.src;
//     popupImageTitle.textContent = cardTitle.textContent;


// }


// initialCards.forEach((item) => {
//     addCard(container, createCards(item));
// });