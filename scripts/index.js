



const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const closeButtonAddPlace = document.querySelector('#close-add_place');
const editButton = document.querySelector('.info__button-pen');
const addPlaceButton = document.querySelector('.profile__button-plus')
const popupAddPlace = document.querySelector("#add-place");

//добавление карточки
const cardList = document.querySelector(".photo-grid")


const name = document.querySelector('.info__user-name');
const job = document.querySelector('.profile-info__occupation');
let form = document.querySelector('.popup__data-container');

let nameInput = document.querySelector('.popup__data_type_name');
let jobInput = document.querySelector('.popup__data_type_job');
// закрытие Popup'a

// Открытие popup'a с данными пользователя
function showPopupData () {
    popup.classList.add('popup_opened');

    nameInput.value = name.textContent;
    jobInput.value = job.textContent;

}
// закрытие Popup'a
function closePopup () {
    popup.classList.remove('popup_opened');
}
// Отправка формы с данными потзователя
function submitFormData (event) {
    event.preventDefault();

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    
    closePopup();
}
// Открытие popup'a Добавления нового места
function showPopupAddPlace () {
    popupAddPlace.classList.add('popup_opened');
}
function closePopupAddPlace () {
    popupAddPlace.classList.remove('popup_opened');
}

// Слушатель для кнопки 'редактировать профиль'
editButton.addEventListener('click', showPopupData);
// Слушатель для кнопки 'Закрытие popup'a редактирования профиля'
popupCloseButton.addEventListener('click', closePopup);
// Слушатель для кнопки 'Закрытие popup'a Добавления места'
closeButtonAddPlace.addEventListener('click', closePopupAddPlace);
// Слушатель для кнопки 'Добавления карточки'
addPlaceButton.addEventListener('click', showPopupAddPlace);
//
form.addEventListener('submit', submitFormData);





//Добавление на страницу карточек
const initialCards = [
    {
        namePlace: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        namePlace: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        namePlace: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        namePlace: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        namePlace: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        namePlace: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cards = document.querySelector('.photo-grid');

function addCards (cardInfo) {
    const card = document.querySelector('.template__initial-cards').content.cloneNode(true);

    card.querySelector('.photo-grid__image').src = cardInfo.link
   
    card.querySelector('.photo-grid__place').textContent = cardInfo.namePlace
    

    cards.append(card)
}

initialCards.forEach(addCards)







