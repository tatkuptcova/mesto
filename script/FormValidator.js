export default class FormValidator{
    
    constructor(formElement, inputSelector, submitButtonSelector, inputErrorClass, errorActiveClass) {
        this._formElement = formElement;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inputErrorClass = inputErrorClass;
        this._errorActiveClass = errorActiveClass;
        this._setEventListeners()
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorActiveClass);
    }

    _hideInputError(inputElement) {
        const errorElement =this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorActiveClass);
        errorElement.textContent = '';
    }


    _inputValidity(inputElement) {
        //check input is valid
        // if valid, hide error else show error
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState(buttonElement, inputList) {
        // if form valid enable button else disable
        if (this._hasInvalidInput(inputList)) {
            buttonElement.disabled = true;
        } else {
            buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        // prevend page reload on form submit
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formElement.reset();
        })

        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        // add listeners for each input
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                // check input is valid
                this._inputValidity(inputElement);
                this._toggleButtonState(buttonElement, inputList);
            });
        });
        // set initial button state
        this._toggleButtonState(buttonElement, inputList);
    }

    initForm() {
        const form = this._formElement
        form.reset()
        const inputElements = Array.from(form.querySelectorAll(this._inputSelector))
    
        this._toggleButtonState(form.querySelector(this._submitButtonSelector), inputElements)

        inputElements.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }
}