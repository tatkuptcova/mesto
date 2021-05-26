const showInputError = (formElement, inputElement, validationConfig) => {
    // show error
    const {inputErrorClass, errorActiveClass} = validationConfig;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorActiveClass);
}

const hideInputError = (formElement, inputElement, validationConfig) => {
    // hide error
    // find error element
    const {inputErrorClass, errorActiveClass} = validationConfig;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorActiveClass);
    errorElement.textContent = '';
}


const checkInputValidity = (formElement, inputElement, validationConfig) => {
    //check input is valid
    // if valid, hide error else show error
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, validationConfig);
    }else{
        showInputError(formElement, inputElement, validationConfig);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const toggleButtonState = (buttonElement, inputList) => {
    // if form valid enable button else disable
    if (hasInvalidInput(inputList)) {
        // disable
        buttonElement.disabled = true;
    }else{
        // enable
        buttonElement.disabled = false;
    }
}

function setEventListeners(formElement, validationConfig) {
    const {inputSelector, submitButtonSelector, ...restvalidationConfig} = validationConfig;
    // prevend page reload on form submit
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        formElement.reset();
    })

    // find all inputs
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    //find submit button
    const buttonElement = formElement.querySelector(submitButtonSelector);


    // add listeners for each input
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            // check input is valid
            checkInputValidity(formElement, inputElement, restvalidationConfig);
            toggleButtonState(buttonElement, inputList);
        });
    });
    // set initial button state
    toggleButtonState(buttonElement, inputList);
}

const enableValidation = (validationConfig) => {
    const {formSelector, ...restvalidationConfig} = validationConfig;
    // find all forms 
    const formList = document.querySelectorAll(formSelector);
    // set event listeners each form
    formList.forEach((formElement) => {
        setEventListeners(formElement, restvalidationConfig);
    })
};