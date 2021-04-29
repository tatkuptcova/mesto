const editButton = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popupProfile = document.querySelector('.popup_profile');

const addButton = document.querySelector('.profile__button-add');
const popupNewCard = document.querySelector('.popup_card');
const profileButtonAdd = document.querySelector('.profile__button-add');

let formElementProfile = document.querySelector('.popup__form_profile');

let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

let nameDisplay = document.querySelector('#profileName');
let jobDisplay = document.querySelector('#profileAbout');

let formElementCard = document.querySelector('.popup__form_add');
let titelDisplay = document.querySelector('#nameplace');
let linkDisplay = document.querySelector('#place');
let titleInput = document.querySelector('.popup__item_input-title');
let linkInput = document.querySelector('.popup__item_input-link');

let likeButtons = document.querySelectorAll('.places__button-like');

function openPopupProfile() { 
    popupProfile.classList.add('popup_opened');
}
  
function closePopupProfile() { 
    popupProfile.classList.remove('popup_opened');
}
  
function openPopupCards(){
    popupNewCard.classList.toggle('popup_opened');
}

function closePopupCards(){
    popupNewCard.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopupProfile()
}

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    titelDisplay.textContent = titleInput.value
    linkDisplay.textContent = linkInput.value
    closePopupCards()
}

likeButtons.forEach(function(button) {
    button.addEventListener(
        'click', () => 
            button.classList.toggle('places__button-like_active')
    )    
})


editButton.addEventListener('click', openPopupProfile);
popupClose.addEventListener('click', closePopupProfile);

addButton.addEventListener('click', openPopupCards);
popupNewCard.addEventListener('click', closePopupCards);


formElementProfile.addEventListener('submit', formSubmitHandler);
formElementCard.addEventListener('submit', formSubmitHandler);


// for (let button of likeButtons) {
//     button.addEventListener(
//         'click', () => 
//             button.classList.toggle('place__button-like_active')
//     )    
// }

