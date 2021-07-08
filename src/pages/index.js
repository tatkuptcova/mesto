import '../pages/index.css';

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
// import PopupWithSubmit from '../components/PopupWithSubmit.js';
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

/*данные для сервера*/
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
      "authorization": 'f5fd2afd-988c-4392-86f3-d04957b3b6e7',
      "content-type": 'application/json',
    },
});


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
const cardList = new Section(
  {
    items: [],
    renderer: (element) => {
        const card = createCard(element.name, element.link);
        cardList.addItem(card.element);
    } 
  },
  elementsList
);
 cardList.rendererItems();

//Окно подтверждение удаления карточки
// const popupWithSubmit = new PopupWithSubmit('.popup_confirm');
// popupWithSubmit.setEventListeners();

//Окно с картинкой
const popupWithImage = new PopupWithImage('.popup_pic');
popupWithImage.setEventListeners();

//Окно с новой карточкой
const popupWithFormNewCard = new PopupWithForm('.popup_card', (inputVals) => {
    api.postNewCard(inputVals['nameplace-input'], inputVals['link-input']).then(data => {
        console.log(data);
        const card = createCard(data.name, data.link, data.likes.length);
        cardList.addItem(card.element);
    });
    // const card = createCard(inputVals['nameplace-input'], inputVals['link-input']);
    // cardList.addItem(card.element);
});
popupWithFormNewCard.setEventListeners();

// Окно редактирования профиля пользователя
const popupWithFormProfile = new PopupWithForm('.popup_profile', (inputVals) => {
    api.changeUserInfo(inputVals['name-input'], inputVals['about-input']).then(data => {
        console.log(data)
        userInfo.setUserInfo(data.name, data.about)
    });
});
popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo ({
    profileNameSelector: '.profile__name', 
    profileJobSelector: '.profile__about',
    profileAvatarSelector: '.profile__image'
});

api.getUserInfo().then(data => {
    userInfo.setUserInfo(data.name, data.about, data.avatar)
});

api.getInitialCards().then((data) => {
   data.forEach(c => {
    //    console.log(c)
       const card = createCard(c.name, c.link, c.likes.length);
       cardList.addItem(card.element);
    })
});


// Создает класс под каждую карточку
function createCard(title, link, likesCount) {
    return new Card(title, link, likesCount, elementTemplate, () => {
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