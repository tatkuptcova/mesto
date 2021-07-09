import PopupWithSubmit from '../components/PopupWithSubmit.js';

export default class Card {

    constructor(currentUserId, cardData, elementTemplate, handleCardClick) {
      console.log(cardData)
      this._allData = cardData;
      this._currentUserId = currentUserId;
      this._title = cardData.name;
      this._link = cardData.link;
      this._likesCount = cardData.likes.length;
      this._elementTemplate = elementTemplate;
      this._handleCardClick = handleCardClick;
      this._element = this._createCard();
    }
  
    get element() {
      return this._element;
    }

    get title() {
      return this._title;
    }

    get link() {
      return this._link;
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
    
    _setEventListeners() {
      this._element
        .querySelector('.elements__button-like')
        .addEventListener('click', () => {
          this._toggleLikeButton();
        });

      const deleteBtn = this._element.querySelector('.elements__button-delete')
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          this._toggleDeleteButton();
        });
      }
      
      this._element
        .querySelector('.elements__image')
        .addEventListener('click', () => {
          this._handleCardClick();
        });
    }
  
    //Окно подтверждение удаления карточки
    _toggleDeleteButton = () => {
      const popupWithSubmit = new PopupWithSubmit('.popup_confirm');
      popupWithSubmit.setEventListeners();
      popupWithSubmit.open();
    }

    _createCard() {
      const elementTemplate = document.querySelector(this._elementTemplate).content;
      const cardElement = elementTemplate.querySelector('.elements__item').cloneNode(true);
      const img  = cardElement.querySelector('.elements__image');
      this._element = cardElement;
      img.src = this._link;
      img.alt = this._title;
      cardElement.querySelector('.elements__title').textContent = this._title;
      cardElement.querySelector('.elements__likes-count').textContent = this._likesCount;
      if (!this._isCardOwnedByCurrentUser()) {
        cardElement.querySelector('.elements__button-delete').remove();
      }
      this._setEventListeners();
      return cardElement
    }

    _isCardOwnedByCurrentUser() {
      const cardOwnerId = this._allData.owner._id
      return this._currentUserId == cardOwnerId
    }
}