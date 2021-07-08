import Popup from '../components/Popup.js'

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.popup__form'); 
    }

    //добавляем слушатель сабмита
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm();
        });
    }

    setSubmitCallback(handleSubmitForm) {
        this._handleSubmitForm = handleSubmitForm;
    }

}