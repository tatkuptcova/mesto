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

const addCardFormValidator = createValidator(validationConfig, popupNewCard);
const editProfileFormValidator = createValidator(validationConfig, popupProfile);

function createCard(title, link) {
    const card = new Card(title, link, elementTemplate, () => {
        openPopup(popupPic);
        popupImage.src = link;
        popupCaption.textContent = title;
        popupCaption.alt = title;
    });
    return card;
}

function addCard(card) {
    elementsList.prepend(card.element); 
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup(popupProfile)
}

function formSubmitNewCardHandler(evt) {
    evt.preventDefault();
    const card = createCard(titleInput.value, linkInput.value);
    addCard(card)
    closePopup(popupNewCard)
}

function createValidator(validationConfig, popup) {
    const {formSelector, ...restvalidationConfig} = validationConfig;

    const formElement = popup.querySelector(formSelector);
    const validator = new FormValidator(restvalidationConfig, formElement)
    validator.enableValidation()
    return validator
};

// Карточки, загружаемые по умолчанию
initialCards.forEach((element) => {
    const card = createCard(element.name, element.link)
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
    editProfileFormValidator.initForm()
});
addButton.addEventListener('click', ()  => {
    openPopup(popupNewCard);
    addCardFormValidator.initForm()
});

popupCloseImage.addEventListener('click', () => closePopup(popupPic));
popupCloseAdd.addEventListener('click', () => closePopup(popupNewCard));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));