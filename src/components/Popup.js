export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    // Функции открытия и закрытия окна добавления карточки
    open() {
        document.querySelector(this._popupSelector).classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() { 
        document.querySelector(this._popupSelector).classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        document.removeEventListener('mousedown', this._handleOverlayClose.bind(this));
    }

    // / Переменные для редактирования всплывающего окна
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target === popup) {
            this.close();
        }
    }
    
    setEventListeners(){
        document.querySelector(this._popupSelector).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
              this.close();
            }
          });
    }
}