const editButton = document.querySelector('.profile__edit-Button')
const popupClose = document.querySelector('.popup__close')
const popupSave = document.querySelector('.popup__button-submit')
const popupName = document.querySelector('.popup__item_input-name')
const popupJob = document.querySelector('.popup__item_input-about')
const fullname = document.querySelector('.profile__name')
const jobs = document.querySelector('.profile__about')
const popup = document.querySelector('.popup')
const formSubmit = document.querySelector('.popup__form')
const addButton = document.querySelector('.profile__add-Button')

function openPopup() { //открытие popup
    popup.classList.add('popup_opened');
}

function closePopup() { //закрытие popup
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
