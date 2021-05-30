export default class FormValidator{
    
    constructor(validationConfig, formElement) {
        this._formElement = formElement;
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorActiveClass = validationConfig.errorActiveClass;
    }

    _showInputError(formElement, inputElement) {
        // show error
        // const {inputErrorClass, errorActiveClass} = validationConfig;
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorActiveClass);
    }

    _hideInputError(inputElement) {
        // hide error
        // find error element
        // const {inputErrorClass, errorActiveClass} = validationConfig;
        const errorElement =this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorActiveClass);
        errorElement.textContent = '';
    }


    _checkInputValidity(formElement, inputElement, validationConfig) {
        //check input is valid
        // if valid, hide error else show error
        if (inputElement.validity.valid) {
            this._hideInputError(formElement, inputElement, validationConfig);
        }else{
            this._showInputError(formElement, inputElement, validationConfig);
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
            // disable
            buttonElement.disabled = true;
        }else{
            // enable
            buttonElement.disabled = false;
        }
    }

    _setEventListeners(formElement, validationConfig) {
        const {inputSelector, submitButtonSelector, ...restvalidationConfig} = validationConfig;
        // prevend page reload on form submit
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            formElement.reset();
        })

        // find all inputs
        const inputList = Array.from(this._formElement.querySelectorAll(inputSelector));
        //find submit button
        const buttonElement = this._formElement.querySelector(submitButtonSelector);


        // add listeners for each input
        inputList.forEach((inputElement) => {
            this._inputElement.addEventListener('input', () => {
                // check input is valid
                this._checkInputValidity(formElement, inputElement, restvalidationConfig);
                this._toggleButtonState(buttonElement, inputList);
            });
        });
        // set initial button state
        this._toggleButtonState(buttonElement, inputList);
    }

    reinitPopupForm(popup) {
        const {formSelector, inputSelector, submitButtonSelector, ...rest} = validationConfig;
        popup.querySelectorAll(formSelector).forEach((form) => {
            form.reset()
            const inputElements = Array.from(form.querySelectorAll(inputSelector))
    
    //        toggleButtonState(form.querySelector(submitButtonSelector), inputElements)
            
            inputElements.forEach((inputElement) => {
    //            hideInputError(form, inputElement, rest)
            });
        });
    }

    enableValidation(validationConfig) {
        const {formSelector, ...restvalidationConfig} = validationConfig;
        // find all forms 
        const formList = document.querySelectorAll(formSelector);
        // set event listeners each form
        formList.forEach((formElement) => {
            this._setEventListeners(formElement, restvalidationConfig);
        })
    };
}