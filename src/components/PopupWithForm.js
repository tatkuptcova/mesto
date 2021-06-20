import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm =  handleSubmitForm;
        this._form = this.popupSelector.querySelector('.popup__form');        
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    //собирает значения полей и возвращает в виде объекта
    _getInputValues = () => {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.title] = input.value;
        });
        return inputValues;
    }

    _submitForm = (evt) => {
        evt.preventDefault();
        this._handleSubmitForm(this._getInputValues());
        this.close();
    }

    _setEventListeners () {
        super._setEventListeners();
        this._form.addEventListener('submit', this._submitForm);
    }

    close() {
        super.close();
        this._form.reset();
    }
}
