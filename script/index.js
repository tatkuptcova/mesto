let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

let nameDisplay = document.querySelector('#profileName');
let jobDisplay = document.querySelector('#profileAbout');

function openPopup() { 
    popup.classList.add('popup_opened');
    nameInput.value = nameDisplay.textContent;
    jobInput.value = jobDisplay.textContent;
}
  
function closePopup() { 
    popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup()
}


editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);


formElement.addEventListener('submit', formSubmitHandler);


let likeButtons = document.querySelectorAll('.places__button-like');
// for (let button of likeButtons) {
//     button.addEventListener(
//         'click', () => 
//             button.classList.toggle('places__button-like_active')
//     )    
// }

likeButtons.forEach(function(button) {
    button.addEventListener(
        'click', () => 
            button.classList.toggle('places__button-like_active')
    )    
})