import '../pages/index.css';

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    addButton,
    popupNewCard,
    profileAvatar,
    popupAvatar,
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
const avatarValidator = createValidator(validationConfig, popupAvatar);

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

//Окно с картинкой
const popupWithImage = new PopupWithImage('.popup_pic');
popupWithImage.setEventListeners();

//Окно с новой карточкой
const popupWithFormNewCard = new PopupWithForm('.popup_card', (inputVals) => {
    api.postNewCard(inputVals['nameplace-input'], inputVals['link-input']).then(data => {
        const card = createCard(data);
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
        userInfo.setUserInfo(data._id, data.name, data.about, data.avatar)
    });
});
popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo ({
    profileNameSelector: '.profile__name', 
    profileJobSelector: '.profile__about',
    profileAvatarSelector: '.profile__image'
});

const popupWithAvatar = new PopupWithForm('.popup_avatar', (avatarInput)  => {
    api.updateAvatar(avatarInput.avatarLink).then((data) => {
        console.log(data)
        userInfo.setUserInfo(data._id, data.name, data.about, data.avatar)
        popupWithAvatar.close();
    })
})
popupWithAvatar.setEventListeners();



api.getUserInfo().then(data => {
    console.log(data)
    userInfo.setUserInfo(data._id, data.name, data.about, data.avatar)
}).then( () => {
    api.getInitialCards().then((data) => {
        data.forEach(c => {
            const card = createCard(c);
            cardList.addItem(card.element);
         })
     });
}).catch((err) => {
    console.log(err);
})

// Создает класс под каждую карточку
function createCard(cardData) {
    return new Card(
        userInfo.getUserInfo().userId,
        cardData,
        elementTemplate, 
        () => {
            popupWithImage.open(cardData.title, cardData.link);
        },
        () => {
            return api.deleteCard(cardData._id)
        },
        () => {
            return api.like(cardData._id)
        },
        () => {
            return api.dislike(cardData._id)
        }
    );
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

profileAvatar.addEventListener('click', () => {
    popupWithAvatar.open();
    avatarValidator.initForm()
});