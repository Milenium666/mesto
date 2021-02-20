


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

export const container = '.photo-grid';
export const template = '.template__initial-cards';
export const placeSelector = '#add-place';
export const form = document.querySelector('.popup__data-container');
export const formPlace = document.querySelector('#preservation_place');
export const addPlaceButton = document.querySelector('.profile__button-plus');
export const editSelector = '#profile-popup';
export const editButton = document.querySelector('.info__button-pen');
export const name = document.querySelector('.info__user-name');
export const job = document.querySelector('.profile-info__occupation');


export const nameInput = document.querySelector('.popup__data_type_name');
export const jobInput = document.querySelector('.popup__data_type_job');
