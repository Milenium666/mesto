const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.info__button-pen');

const name = document.querySelector('.info__user-name');
const job = document.querySelector('.profile-info__occupation');
let form = document.querySelector('.popup__data-container');





function showPopup () {
    popup.classList.add('popup_opened');

    document.querySelector('.popup__data_type_name').value = name.textContent;
    document.querySelector('.popup__data_type_job').value = job.textContent;

}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function submitForm (event) {
    event.preventDefault();


    let nameInput = document.querySelector('.popup__data_type_name');
    let jobInput = document.querySelector('.popup__data_type_job');

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    
    closePopup();
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);

form.addEventListener('submit', submitForm);




