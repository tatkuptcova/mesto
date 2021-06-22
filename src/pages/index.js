import '../pages/index.css';

import {initialCards} from '../utils/initial-cards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    addButton,
    popupNewCard,
    elementTemplate,
    elementsList,
    editButton,
    popupProfile,
    nameInput,
    jobInput,
} from '../utils/constants.js'

//объект настроек для валидации с классами и селекторами
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
};

const addCardFormValidator = createValidator(validationConfig, popupNewCard);
const editProfileFormValidator = createValidator(validationConfig, popupProfile);

//отвечает за отображение карточек
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item));
    }
  },
  elementsList
);
 cardList.rendererItems();

//попап с картинкой
const popupWithImage = new PopupWithImage('.popup_pic');
popupWithImage.setEventListeners();

//Окно с новой карточкой
const popupWithFormNewCard = new PopupWithForm('.popup_card', (inputVals) => {
    const card = createCard(inputVals['nameplace-input'], inputVals['link-input']);
    cardList.addItem(card.element);
});
popupWithFormNewCard.setEventListeners();

// Окно редактирования профиля пользователя
const popupWithFormProfile = new PopupWithForm('.popup_profile', (inputVals) => {
    userInfo.setUserInfo(inputVals['name-input'], inputVals['about-input'])
});
popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo ({
    profileNameSelector: '.profile__name', 
    profileJobSelector: '.profile__about'
});

// Создает класс под каждую карточку
function createCard(title, link) {
    return new Card(title, link, elementTemplate, () => {
        popupWithImage.open(title,link);
    });
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
    cardList.addItem(card.element)
});

editButton.addEventListener('click', () => {
    popupWithFormProfile.open();
    const data =  userInfo.getUserInfo();
    nameInput.value = data.name;
    jobInput.value = data.job;
    editProfileFormValidator.initForm()
});
addButton.addEventListener('click', ()  => {
    popupWithFormNewCard.open();
    addCardFormValidator.initForm()
});