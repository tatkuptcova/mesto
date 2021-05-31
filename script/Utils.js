export const popupPic = document.querySelector('.popup_pic');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');

// Функции открытия и закрытия окна добавления карточки
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
}

export function closePopup(popup) { 
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
}

// / Переменные для редактирования всплывающего окна
export function handleEscClose(evt) {
    if (evt.key === 'Escape') {
       closePopup(document.querySelector('.popup_opened'));
    }
}

