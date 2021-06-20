export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    // Функции открытия и закрытия окна добавления карточки
    open() {
        this.popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() { 
        this.popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
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
        this.popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
              this.close();
            }
          });
    }
}