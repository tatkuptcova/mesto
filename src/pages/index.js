import '../pages/index.css';

import {initialCards} from '../utils/initial-cards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formElementNewCard = document.querySelector('.popup__form_add');
const addButton = document.querySelector('.profile__button-add');

const popupNewCard = document.querySelector('.popup_card');

const titleInput = document.querySelector('.popup__input_add-title');
const linkInput = document.querySelector('.popup__input_add-link');

const elementTemplate = "#cards-template";
const elementsList = document.querySelector(".elements__catalogue");

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');

const formElementProfile = document.querySelector('.popup__form_profile');

const nameInput = document.querySelector('.popup__input_edit-name');
const jobInput = document.querySelector('.popup__input_edit-about');

const nameDisplay = document.querySelector('#profileName');
const jobDisplay = document.querySelector('#profileAbout');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

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
        elementsList.append(createCard(item));
    }
  },
  elementsList
);
cardList.addItem();

//попап с картинкой
const popupWithImage = new PopupWithImage('.popup_pic');
popupWithImage.setEventListeners();

//Окно с новой карточкой
const popupWithFormNewCard = new PopupWithForm('.popup_card');
popupWithFormNewCard.setEventListeners();

// Окно редактирования профиля пользователя
const PopupWithFormProfile = new PopupWithForm('.popup_profile');
PopupWithFormProfile.setEventListeners();

const userInfo = new UserInfo ({
    profileNameSelector: '.profile__name', 
    profileJobSelector: '.profile__about'
});

// Создает класс под каждую карточку
function createCard(title, link) {
    return new Card(title, link, elementTemplate, () => {
        popupWithImage.open();
        popupImage.src = link;
        popupCaption.textContent = title;
        popupCaption.alt = title;
    });
}

function addCard(card) {
    elementsList.prepend(card.element); 
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    PopupWithFormProfile.close()
}

function formSubmitNewCardHandler(evt) {
    evt.preventDefault();
    const card = createCard(titleInput.value, linkInput.value);
    addCard(card)
    popupWithFormNewCard.close()
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

formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);
formElementProfile.addEventListener('submit', formSubmitProfileHandler);

editButton.addEventListener('click', () => {
    PopupWithFormProfile.open();
    const {name, job} =  userInfo.getUserInfo();
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    editProfileFormValidator.initForm()
});
addButton.addEventListener('click', ()  => {
    popupWithFormNewCard.open();
    addCardFormValidator.initForm()
});