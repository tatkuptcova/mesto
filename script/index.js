import {initialCards} from './initial-cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {
    popupPic,
    popupCloseImage,
    formElementNewCard,
    formElementProfile,
    addButton,
    popupCloseAdd,
    popupNewCard,
    elementTemplate,
    elementsList,
    editButton,
    popupCloseProfile,
    popupProfile,
    nameInput,
    jobInput,
    openPopup,
    closePopup,
    titleInput,
    linkInput,
    nameDisplay,
    jobDisplay
} from './Utils.js';


// Карточки, загружаемые по умолчанию
initialCards.forEach((element) => {
  const name = element.name;
  const link = element.link;
  const temp = new Card(name, link, elementTemplate);
  elementsList.prepend(temp.element);
});

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
};

function addCard(cardElement) { 
    elementsList.prepend(cardElement);
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup(popupProfile)
}

formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);
formElementProfile.addEventListener('submit', formSubmitProfileHandler);

function formSubmitNewCardHandler(evt) {
    evt.preventDefault();
    const card = new Card(titleInput.value,  linkInput.value, elementTemplate);
    addCard(card.element);
    closePopup(popupNewCard)
}


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