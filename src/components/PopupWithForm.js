import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, asyncSubmitFormHandler) {
        super(popupSelector);
        this._asyncSubmitFormHandler = asyncSubmitFormHandler;
        this._form = this._popupSelector.querySelector('.popup__form');        
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._btnSubmit = this._popupSelector.querySelector('.popup__button-submit');
        this._btnTextDefault = this._btnSubmit.textContent;
    }

    //собирает значения полей и возвращает в виде объекта
    _getInputValues = () => {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.id] = input.value;
        });
        return inputValues;
    }

    _submitForm = (evt) => {
        evt.preventDefault();
        this.showSaving();
        this._asyncSubmitFormHandler(this._getInputValues())
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            this.restoreDefaultText();
        });
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm);
    }

    close() {
        super.close();
        this._form.reset();
    }

    showSaving() {
        this._btnSubmit.textContent = 'Сохранение...';
        this._btnSubmit.disabled = true;
    }

    restoreDefaultText() {
        this._btnSubmit.textContent = this._btnTextDefault;
        this._btnSubmit.disabled = false;
    }
}