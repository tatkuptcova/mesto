import Popup from '../components/Popup.js'

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.popup__form');
        this._handleSubmitForm = handleSubmitForm;
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
}