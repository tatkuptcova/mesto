export const formElementNewCard = document.querySelector('.popup__form_add');
export const addButton = document.querySelector('.profile__button-add');

export const popupNewCard = document.querySelector('.popup_card');

export const titleInput = document.querySelector('.popup__input_add-title');
export const linkInput = document.querySelector('.popup__input_add-link');

export const elementTemplate = "#cards-template";
export const elementsList = document.querySelector(".elements__catalogue");

export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_profile');

export const profileAvatar = document.querySelector('.profile__avatar');
export const popupAvatar = document.querySelector('.popup_avatar');

export const formElementProfile = document.querySelector('.popup__form_profile');

export const nameInput = document.querySelector('.popup__input_edit-name');
export const jobInput = document.querySelector('.popup__input_edit-about');

export const nameDisplay = document.querySelector('#profileName');
export const jobDisplay = document.querySelector('#profileAbout');

export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');

//объект настроек для валидации с классами и селекторами
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
};