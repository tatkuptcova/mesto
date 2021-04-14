const editButton = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function openPopup() { 
    popup.classList.add('popup_opened');
}
  
function closePopup() { 
    popup.classList.remove('popup_opened');
}
  
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
  

/*const popupSave = document.querySelector('.popup__button-submit');
const popupName = document.querySelector('.popup__item_input-name');
const popupAbout = document.querySelector('.popup__item_input-about');

const nameInput = document.querySelector('.popup__item_input-name');
const nameProfile = document.querySelector('.profile__name');

const profileAbout = document.querySelector('.profile__about');
const descriptionInput = document.querySelector('.popup__item_input-about');

const popupButtonAbout = document.querySelector('.popup__button-submit-edit');

function saveItem(){
    popupSave.className.remove('popup__button-submit-edit');
}

popupButtonAbout.addEventListener('click', saveItem);*/


// Находим форму в DOM
let formElement = document.querySelector('.popup__button-submit');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    const nameInput = document.querySelector(".popup__item_input-name");
    const nameProfile = (".profile__name");
    // Получите значение полей jobInput и nameInput из свойства value
    const jobInput = document.querySelector('.popup__item_input-about');
    const profileAbout = (".profile__about");
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);