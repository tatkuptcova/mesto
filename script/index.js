import {initialCards} from './initial-cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {
    openPopup,
    closePopup,
} from './utils.js';


const popupCloseImage = document.querySelector('.popup__close_image');
const formElementNewCard = document.querySelector('.popup__form_add');
const addButton = document.querySelector('.profile__button-add');

const popupCloseAdd = document.querySelector('.popup__close_add');
const popupNewCard = document.querySelector('.popup_card');

const titleInput = document.querySelector('.popup__input_add-title');
const linkInput = document.querySelector('.popup__input_add-link');

const elementTemplate = "#cards-template";
const elementsList = document.querySelector(".elements__catalogue");

const editButton = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const popupProfile = document.querySelector('.popup_profile');

const formElementProfile = document.querySelector('.popup__form_profile');

const nameInput = document.querySelector('.popup__input_edit-name');
const jobInput = document.querySelector('.popup__input_edit-about');

const nameDisplay = document.querySelector('#profileName');
const jobDisplay = document.querySelector('#profileAbout');


const popupPic = document.querySelector('.popup_pic');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const popupList = document.querySelectorAll('.popup');


const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
};

function addCard(card) { 
    elementsList.prepend(card.element);
    card.setImageClickListener(() => {
        openPopup(popupPic);
        popupImage.src = card.link;
        popupCaption.textContent = card.title;
        popupCaption.alt = card.title;
    })
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup(popupProfile)
}

function formSubmitNewCardHandler(evt) {
    evt.preventDefault();
    const card = new Card(titleInput.value,  linkInput.value, elementTemplate);
    addCard(card);
    closePopup(popupNewCard)
}


function enableValidation(validationConfig, popup) {
    const {formSelector, ...restvalidationConfig} = validationConfig;

    // find all forms 
    const formElement = popup.querySelector(formSelector);
    const validator = new FormValidator(
        formElement,
        restvalidationConfig.inputSelector,
        restvalidationConfig.submitButtonSelector,
        restvalidationConfig.inputErrorClass,
        restvalidationConfig.errorActiveClass,
    )
    validator.initForm()
};


// Карточки, загружаемые по умолчанию
initialCards.forEach((element) => {
    const name = element.name;
    const link = element.link;
    const card = new Card(name, link, elementTemplate);
    addCard(card)
});
  
  
popupList.forEach((popup) => {
    popup.addEventListener( 'click', (event) => {
        if (event.target === popup) {
            closePopup(popup);
        };
    });
});

formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);
formElementProfile.addEventListener('submit', formSubmitProfileHandler);


editButton.addEventListener('click', () => {
    openPopup(popupProfile);
    enableValidation(validationConfig, popupProfile)
});
addButton.addEventListener('click', ()  => {
    openPopup(popupNewCard);
    enableValidation(validationConfig, popupNewCard)
});

popupCloseImage.addEventListener('click', () => closePopup(popupPic));
popupCloseAdd.addEventListener('click', () => closePopup(popupNewCard));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));