const formAdd = document.querySelector('.popup__data-container');
const inputsList = formAdd.querySelectorAll('.popup__data');

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
});

inputsList.forEach((input) => {
    input.addEventListener('input', (event) => {
        const error = formAdd.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessange;
    
        if(input.validity.valid) {
            input.classList.remove('popup__data_invalid');
        } else {
            input.classList.add('popup__data_invalid');
        }
    });
});



