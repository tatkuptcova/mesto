const editButton = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popupSave = document.querySelector('.popup__button-submit');
const popupName = document.querySelector('.popup__item_input-name');
const popupAbout = document.querySelector('.popup__item_input-about');

const nameInput = document.querySelector(".popup__item_input-name");
const nameProfile = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__about");
const descriptionInput = document.querySelector(".popup__item_input-about");

const submitButtonAbout = document.querySelector(".popup__button-submit-edit");


function openPopup() { //открытие popup
    popup.classList.add('popup_opened');
}
  
function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}
  
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
  