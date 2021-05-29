export const popupPic = document.querySelector('.popup_pic');
export const popupCloseImage = document.querySelector('.popup__close_image');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');

export const formElementNewCard = document.querySelector('.popup__form_add');

export const addButton = document.querySelector('.profile__button-add');
export const popupCloseAdd = document.querySelector('.popup__close_add');
export const popupNewCard = document.querySelector('.popup_card');

export const titleInput = document.querySelector('.popup__input_add-title');
export const linkInput = document.querySelector('.popup__input_add-link');

export const titleDisplay = document.querySelector('#nameplace');
export const linkDisplay = document.querySelector('#place');

// Функции открытия и закрытия окна добавления карточки
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
}

export function closePopup(popup) { 
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    
}

export const popupList = document.querySelectorAll('.popup');
popupList.forEach((popup) => {
    popup.addEventListener( 'click', (event) => {
        if (event.target === popup) {
            closePopup(popup);
        };
    });
});

// export function addCard(cardElement) { 
//     elementsList.prepend(cardElement);
// }

export const elementTemplate = "#cards-template";
export const elementsList = document.querySelector(".elements__catalogue");

// Переменные для редактирования всплывающего окна
export const editButton = document.querySelector('.profile__edit-button');
export const popupCloseProfile = document.querySelector('.popup__close_profile');
export const popupProfile = document.querySelector('.popup_profile');

export const formElementProfile = document.querySelector('.popup__form_profile');

export const nameInput = document.querySelector('.popup__input_edit-name');
export const jobInput = document.querySelector('.popup__input_edit-about');

export const nameDisplay = document.querySelector('#profileName');
export const jobDisplay = document.querySelector('#profileAbout');


export function handleEscClose(evt) {
    if (evt.key === 'Escape') {
       closePopup(document.querySelector('.popup_opened'));
    }
}

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
};