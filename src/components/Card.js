export default class Card {

    constructor(title, link, likesCount, elementTemplate, handleCardClick) {
      this._title = title;
      this._link = link;
      this._likesCount = likesCount;
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
      this._element
        .querySelector('.elements__button-delete')
        .addEventListener('click', () => {
          this._toggleDeleteButton();
        });
      this._element
        .querySelector('.elements__image')
        .addEventListener('click', () => {
          this._handleCardClick();
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
      cardElement.querySelector('.elements__like-count').textContent = this._likesCount;
      this._setEventListeners();
      return cardElement
    }
}