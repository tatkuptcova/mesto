export default class FormValidator{
    
    constructor(validationConfig, formElement) {
        this._formElement = formElement;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorActiveClass = validationConfig.errorActiveClass;
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

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
    

    initForm() {
        this._formElement.reset()
        const inputElements = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    
        this._toggleButtonState(this._formElement.querySelector(this._submitButtonSelector), inputElements)

        inputElements.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }
}