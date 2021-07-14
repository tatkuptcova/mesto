import PopupWithSubmit from '../components/PopupWithSubmit.js';

export default class Card {

    constructor(
      currentUserId, 
      cardData, 
      elementTemplate,
      handleCardClick,
      handleDeleteClick,
      asyncLikeHandler,
      asyncDislikeHandler
    ) {
      console.log(cardData)
      this._allData = cardData;
      this._currentUserId = currentUserId;
      this._elementTemplate = elementTemplate;
      this._handleCardClick = handleCardClick;
      this._handleDeleteClick = handleDeleteClick;
      this._asyncLikeHandler = asyncLikeHandler;
      this._asyncDislikeHandler = asyncDislikeHandler;
      this._element = this._createCard();
    }
  
    get element() {
      return this._element;
    }

    get title() {
      return this._allData.name;
    }

    get link() {
      return this._allData.link;
    }

    _toggleLikeButton() {
      var handler;
      if (this._isCardLikedByCurrentUser()) {
        handler = this._asyncDislikeHandler
      } else {
        handler = this._asyncLikeHandler
      }
      handler()
        .then((data) => {
          this._allData = data
        })
        .then(() => this._showLikes())
    }

    deleteCard() {
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
          this._handleDeleteClick(this);
        });
      }
      
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
      img.src = this.link;
      img.alt = this.title;
      cardElement.querySelector('.elements__title').textContent = this.title;
      if (!this._isCardOwnedByCurrentUser()) {
        cardElement.querySelector('.elements__button-delete').remove();
      }
      this._showLikes();
      this._setEventListeners();
      return cardElement
    }

    _showLikes() {
      console.log(this._allData)
      this._element.querySelector('.elements__likes-count').textContent = this._allData.likes.length;
      const likeBtn = this._element.querySelector('.elements__button-like')
      if (this._isCardLikedByCurrentUser()) {
        likeBtn.classList.add('elements__button-like_active');
      } else {
        likeBtn.classList.remove('elements__button-like_active');
      }
    }

    _isCardOwnedByCurrentUser() {
      const cardOwnerId = this._allData.owner._id
      return this._currentUserId == cardOwnerId
    }

    _isCardLikedByCurrentUser() {
      return this._allData.likes.some(l => {
        return l._id == this._currentUserId
      });
    }
}