export  class Card {
    constructor(name, link, elementTemplate) {
      this._name = name;
      this._link = link;
      this._elementTemplate = elementTemplate;
      this._element = this._createCard();
    }
  
    get element() {
      return this._element;
    }
    _toggleLikeButton() {
      this._element
        .querySelector(".elements__button-like")
        .classList.toggle("elements__button-like_active");
    }
  
    _toggleDeleteButton() {
      this._element.remove();
      this._element = null;
    }
    _openpopupNewCard() {
      openPopup(popupContainer);
      Img.src = this._link;
      Caption.textContent = this._title;
    }
    _setEventListeners() {
      this._element
        .querySelector(".elements__button-like")
        .addEventListener("click", () => {
          this._toggleLikeButton();
        });
      this._element
        .querySelector(".elements__button-delete")
        .addEventListener("click", () => {
          this._toggleDeleteButton();
        });
      this._element
        .querySelector(".elements__image")
        .addEventListener("click", () => {
          this._togglePopupNewCard();
        });
    }
  
    _createCard() {
      const elementTemplate = document.querySelector(this._elementTemplate).content;
      const cardElement = elementTemplate.querySelector(".elements__item").cloneNode(true);
      const img  = cardElement.querySelector(".elements__image");
      this._element = cardElement;
      img.src = this._link;
      img.alt = this._name;
      cardElement.querySelector(".elements__title").textContent = this._name;
      this._setEventListeners();
      return cardElement;
    }
  }