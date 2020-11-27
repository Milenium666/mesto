const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const closeButtonAddPlace = document.querySelector('#close-add_place');
const editButton = document.querySelector('.info__button-pen');
const addPlaceButton = document.querySelector('.profile__button-plus');
const popupAddPlace = document.querySelector("#add-place");
const name = document.querySelector('.info__user-name');
const job = document.querySelector('.profile-info__occupation');
const form = document.querySelector('.popup__data-container');

const  formAddPlace = document.querySelector('#preservation_place');

const nameInput = document.querySelector('.popup__data_type_name');
const jobInput = document.querySelector('.popup__data_type_job');

const profilePopup = document.querySelector('#profile-popup');


// Открытие popup'a с данными пользователя
function showPopup (popup) {
    popup.classList.add('popup_opened');
}
// закрытие Popup'a
function closePopup (event) {
    const popup = event.target.closest('.popup');
    popup.classList.remove('popup_opened');
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
    showPopup(profilePopup);
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;

}


);
// Слушатель для кнопки 'Закрытие popup'a редактирования профиля'
popupCloseButton.addEventListener('click', closePopup);
// Слушатель для кнопки 'Закрытие popup'a Добавления места'
closeButtonAddPlace.addEventListener('click', closePopup);
// Слушатель для кнопки 'Добавления карточки'
addPlaceButton.addEventListener('click', function () {
    showPopup(popupAddPlace);
});
// Слушатель формы данных пользователя
form.addEventListener('submit', submitFormData);
// Слушатель формы добавления карточки
formAddPlace.addEventListener('submit', submitFormAddPlace)


function submitFormAddPlace (event) {
    event.preventDefault();

    const dataPlace = {};

    dataPlace.name  = formAddPlace.querySelector('.popup__data_type_name-place').value;
    dataPlace.link = formAddPlace.querySelector('.popup__data_type_pic-link').value;

    addCard(container, createCard(dataPlace.name, dataPlace.link));

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

closeBtnShowImage.addEventListener('click', closePopup);

function showPopupImage(event) {
    showPopup(popupShowImage);
    const openCard = event.target.closest('.photo-grid__card');

    const cardImage = openCard.querySelector('.photo-grid__image');
    const cardTitle = openCard.querySelector('.photo-grid__discription');

    popupImage.src = cardImage.src;
    popupImageTitle.textContent = cardTitle.textContent;

}
//Функция создания карточки
function createCard(name, link) {
    const element = document.querySelector('.template__initial-cards').content.cloneNode(true);

    element.querySelector('.photo-grid__image').src = link;
    element.querySelector('.photo-grid__place').textContent = name;

    element.querySelector('.photo-grid__detete').addEventListener('click', event => {
        event.target.closest('.photo-grid__card').remove();
    });

    element.querySelector('.photo-grid__like').addEventListener('click', event => {
        event.target.classList.toggle('photo-grid__like_active');
    });

        const templateCardImage = element.querySelector('.photo-grid__image');
    templateCardImage.addEventListener('click', showPopupImage);

     ///возвращается созданная карточка
    return element;
}

const cardElement = document.querySelector('.template__initial-cards');

function addCard (cardContainer, cardElement) {
    cardContainer.prepend(cardElement);

}

initialCards.forEach(cardElement => addCard(container, createCard(cardElement.name, cardElement.link)));











