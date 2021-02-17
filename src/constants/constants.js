export const initialCards = [
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

export const template = '.template__initial-cards';
export const placeSelector = '#add-place';
export const container = '.photo-grid';
export const popupImage = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__description-place');

export const popupShowImage = document.querySelector('#show-image');
export const form = document.querySelector('.popup__data-container');
export const formPlace = document.querySelector('#preservation_place');
export const nameInput = document.querySelector('.popup__data_type_name');
export const jobInput = document.querySelector('.popup__data_type_job');
export const addPlaceButton = document.querySelector('.profile__button-plus');

const popupCloseButton = document.querySelector('.popup__close');
const closeButtonAddPlace = document.querySelector('#close-add_place');
const editButton = document.querySelector('.info__button-pen');

const popupAddPlace = document.querySelector("#add-place");
const name = document.querySelector('.info__user-name');
const job = document.querySelector('.profile-info__occupation');

const overlayShowImage = document.querySelector('#show-image');


const profilePopup = document.querySelector('#profile-popup');

const closeBtnShowImage = document.querySelector('#close-show_image');
