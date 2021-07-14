import Popup from '../components/Popup.js'

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.popup__form');
        this._btnSubmit = this._popupSelector.querySelector('.popup__button-submit');
        this._btnTextDefault = this._btnSubmit.textContent;
    }

    //добавляем слушатель сабмита
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('Submitted')
            this._handleSubmitForm();
        });
    }


    open(asyncSubmitFormHandler) {
        super.open();
        this._handleSubmitForm = () => {
            this._showSaving()
            asyncSubmitFormHandler()
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.close();
                this._restoreDefaultText();
            })
        }
    }
    
    _showSaving() {
        this._btnSubmit.textContent = 'Удаление...';
        this._btnSubmit.disabled = true;
    }

    _restoreDefaultText() {
        this._btnSubmit.textContent = this._btnTextDefault;
        this._btnSubmit.disabled = false;
    }
}