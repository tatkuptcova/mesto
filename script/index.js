let editButton = document.querySelector('.profile__edit-button');
let popupCloseProfile = document.querySelector('.popup__close_profile');
let popupProfile = document.querySelector('.popup_profile');

let formElementProfile = document.querySelector('.popup__form_profile');

let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

let nameDisplay = document.querySelector('#profileName');
let jobDisplay = document.querySelector('#profileAbout');

function openPopupProfile() { 
    popupProfile.classList.add('popup_opened');
    nameInput.value = nameDisplay.textContent;
    jobInput.value = jobDisplay.textContent;
}
  
function closePopupProfile() { 
    popupProfile.classList.remove('popup_opened');
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopupProfile()
}

editButton.addEventListener('click', openPopupProfile);
popupCloseProfile.addEventListener('click', closePopupProfile);

formElementProfile.addEventListener('submit', formSubmitProfileHandler);

let addButton = document.querySelector('.profile__button-add');
let popupCloseAdd = document.querySelector('.popup__close_add');
let popupNewCard = document.querySelector('.popup_card');

let formElementNewCard= document.querySelector('.popup__form_add');

let titleInput = document.querySelector('.popup__item_input-title');
let linkInput = document.querySelector('.popup__item_input-link');

let titleDisplay = document.querySelector('#nameplace');
let linkDisplay = document.querySelector('#place');

function openPopupNewCard() { 
    popupNewCard.classList.add('popup_opened');
   titleInput.value = titleDisplay.textContent;
    linkInput.value = linkDisplay.textContent;
}
  
function closePopupNewCard() { 
    popupNewCard.classList.remove('popup_opened');
}

function formSubmitCardHandler(evt) {
    evt.preventDefault(); 
    titleDisplay.textContent = titleInput.value
    linkDisplay.textContent = linkInput.value
    closePopupNewCard()
}

addButton.addEventListener('click', openPopupNewCard);
popupCloseAdd.addEventListener('click', closePopupNewCard);

formElementNewCard.addEventListener('submit', formSubmitCardHandler);

let likeButtons = document.querySelectorAll('.places__button-like');
// for (let button of likeButtons) {
//     button.addEventListener(
//         'click', () => 
//             button.classList.toggle('place__button-like_active')
//     )    
// }

likeButtons.forEach(function(button) {
    button.addEventListener(
        'click', () => 
            button.classList.toggle('places__button-like_active')
    )    
})