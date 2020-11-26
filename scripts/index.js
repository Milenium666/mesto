



const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const closeButtonAddPlace = document.querySelector('#close-add_place');
const editButton = document.querySelector('.info__button-pen');
const addPlaceButton = document.querySelector('.profile__button-plus');

const popupAddPlace = document.querySelector("#add-place");

//добавление карточки
const cardList = document.querySelector(".photo-grid")


const name = document.querySelector('.info__user-name');
const job = document.querySelector('.profile-info__occupation');
const form = document.querySelector('.popup__data-container');

const  formAddPlace = document.querySelector('#preservation_place');

let nameInput = document.querySelector('.popup__data_type_name');
let jobInput = document.querySelector('.popup__data_type_job');

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
    
    closePopup();
}
// // Открытие popup'a Добавления нового места
// function showPopupAddPlace () {
//     popupAddPlace.classList.add('popup_opened');
// }


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

    dataPlace.namePlace  = formAddPlace.querySelector('.popup__data_type_name-place').value;
    dataPlace.link = formAddPlace.querySelector('.popup__data_type_pic-link').value;

    addCard(dataPlace);

    formAddPlace.reset();

    closePopup(event);
    
    
}




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

function addCard (cardInfo) {
    const card = document.querySelector('.template__initial-cards').content.cloneNode(true);

    card.querySelector('.photo-grid__image').src = cardInfo.link;
    card.querySelector('.photo-grid__place').textContent = cardInfo.namePlace;
    
    card.querySelector('.photo-grid__detete').addEventListener('click', event => {
        const deleteCard = event.target.closest('.photo-grid__card');

        if(deleteCard) {
            deleteCard.remove();
        }
    })

    card.querySelector('.photo-grid__like').addEventListener('click', event => {
        event.target.classList.toggle('photo-grid__like_active');
        console.log(event.target);

    });
    

    cards.prepend(card);
}

initialCards.forEach(addCard);








