 class Card {
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
    }

    _openPopupPic() {
        popupImage.src = this._link;
        popupCaption.textContent = this._title;
        popupCaption.alt = this._title;
        openPopup(popupPic);
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
                this._closePopup(popupPic)
            });
        }

    _createCard() {
        const cardElement = elementTemplate.content.querySelector('.elements__item').cloneNode(true);

        const caption = cardElement.querySelector('.elements__title');
        caption.textContent = this._title

        const img = cardElement.querySelector('.elements__image');
        this._element = cardElement;

        img.src = this._link;
        img.alt = this._title;

        return cardElement
    }
}