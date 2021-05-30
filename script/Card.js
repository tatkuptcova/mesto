import {
    popupPic,
    popupCaption,
    popupImage,
    openPopup,
} from './Utils.js';

export default class Card {

    constructor(title, link, elementTemplate) {
      this._title = title;
      this._link = link;
      this._elementTemplate = elementTemplate;
      this._element = this._createCard();
    }
  
    get element() {
      return this._element;
    }

    _toggleLikeButton() {
      this._element
        .querySelector('.elements__button-like')
        .classList.toggle('elements__button-like_active');
    }

    _toggleDeleteButton() {
      this._element.remove();
      this._element = null;
    }

    _openPopupPic() {
      openPopup(popupPic);
      popupImage.src = this._link;
      popupCaption.textContent = this._title;
      popupCaption.alt = this._title;
    }
    
    _setEventListeners() {
      this._element
        .querySelector('.elements__button-like')
        .addEventListener('click', () => {
          this._toggleLikeButton();
        });
      this._element
        .querySelector('.elements__button-delete')
        .addEventListener('click', () => {
          this._toggleDeleteButton();
        });
      this._element
        .querySelector('.elements__image')
        .addEventListener('click', () => {
          this._openPopupPic();
        });
    }
  
    _createCard() {
      const elementTemplate = document.querySelector(this._elementTemplate).content;
      const cardElement = elementTemplate.querySelector('.elements__item').cloneNode(true);
      const img  = cardElement.querySelector('.elements__image');
      this._element = cardElement;
      img.src = this._link;
      img.alt = this._title;
      cardElement.querySelector('.elements__title').textContent = this._title;
      this._setEventListeners();
      return cardElement;
    }
}