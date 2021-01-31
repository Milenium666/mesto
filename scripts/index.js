import {validationConfig, FormValidator} from './FormValidator.js'
import {Card} from './Card.js';


const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const closeButtonAddPlace = document.querySelector('#close-add_place');
const editButton = document.querySelector('.info__button-pen');
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupAddPlace = document.querySelector("#add-place");
const name = document.querySelector('.info__user-name');
const job = document.querySelector('.profile-info__occupation');
const form = document.querySelector('.popup__data-container');

const overlayShowImage = document.querySelector('#show-image');
const formAddPlace = document.querySelector('#preservation_place');

const nameInput = document.querySelector('.popup__data_type_name');
const jobInput = document.querySelector('.popup__data_type_job');

const profilePopup = document.querySelector('#profile-popup');

const formValidator = new FormValidator(validationConfig, form);
const formAddPlaceValidator = new FormValidator(validationConfig,formAddPlace);

function createCards(item, placeholder) {
    let card = new Card(item, '.template__initial-cards');
    const cardElement = card.createCard();

    placeholder.prepend(cardElement);
}


// Открытие popup'a с данными пользователя
function showPopup (popup) {

    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEcs);


}


// закрытие Popup'a
function closePopup () {
    const popup = document.querySelector('.popup_opened');
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEcs);



}
function closePopupEcs (event) {
    if (event.key === 'Escape') {
        closePopup(event);
    }
}

// Отправка формы с данными потзователя
function submitFormData (event) {
    event.preventDefault();

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    closePopup(event);
}



// Слушатель для кнопки 'редактировать профиль'
editButton.addEventListener('click', function() {

    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    const button = form.querySelector('.popup__button-save');
    formValidator.setButtonState(button, form.checkValidity());

    showPopup(profilePopup);

});
// Слушатель для кнопки 'Закрытие popup'a редактирования профиля'
popupCloseButton.addEventListener('click', closePopup);

function popupClickHandler(event) {
    if (event.target.classList.contains('popup_opened')) {
        closePopup(event);
    }
};

// слушатели открытия popup'ов
popup.addEventListener('click', popupClickHandler);
popupAddPlace.addEventListener('click', popupClickHandler);
overlayShowImage.addEventListener('click', popupClickHandler);



// Слушатель для кнопки 'Добавления карточки'
addPlaceButton.addEventListener('click', function () {
    // очистка формы перед открытием
    formAddPlace.reset();

    // открытие popup'pa
    showPopup(popupAddPlace);
    // слушатель для кнопки закрытия popup'a
    closeButtonAddPlace.addEventListener('click', closePopup);
});
// Слушатель для кнопки 'Закрытие popup'a Добавления места'

// Слушатель формы данных пользователя
form.addEventListener('submit', submitFormData);

// Слушатель формы добавления карточки
formAddPlace.addEventListener('submit', submitFormAddPlace);

function submitFormAddPlace (event) {
    event.preventDefault();

    const dataPlace = {};

    dataPlace.name  = formAddPlace.querySelector('.popup__data_type_name-place').value;
    dataPlace.link = formAddPlace.querySelector('.popup__data_type_pic-link').value;

    createCards(dataPlace, container);


    formAddPlace.reset();

    closePopup(event);

}




//Добавление на страницу карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const container = document.querySelector('.photo-grid');


const popupShowImage = document.querySelector('#show-image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__description-place');


const closeBtnShowImage = document.querySelector('#close-show_image');



    export function showPopupImage(event) {
    showPopup(popupShowImage);
    const openCard = event.target.closest('.photo-grid__card');

    const cardImage = openCard.querySelector('.photo-grid__image');
    const cardTitle = openCard.querySelector('.photo-grid__discription');

    popupImage.src = cardImage.src;
    popupImageTitle.textContent = cardTitle.textContent;
    closeBtnShowImage.addEventListener('click', closePopup);

}


initialCards.forEach((item) => {
    createCards (item, container);
});


formValidator.enableValidation();
formAddPlaceValidator.enableValidation();
