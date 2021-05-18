const showInputError = (formElement, inputElement, isValid) => {
    // show error
    const {inputErrorClass, errorActiveClass} = isValid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorActiveClass);
}

const hideInputError = (formElement, inputElement, isValid) => {
    // hide error
    // find error element
    const {inputErrorClass, errorActiveClass} = isValid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorActiveClass);
    errorElement.textContent = '';
}


const checkInputValidity = (formElement, inputElement, isValid) => {
    //check input is valid
    // if valid, hide error else show error
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, isValid);
    }else{
        showInputError(formElement, inputElement, isValid);
    }
}

const hasInvalidInput = (inputList) => {
    result = inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
    return result
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

function setEventListeners(formElement, isValid) {
    const {inputSelector, submitButtonSelector, ...restIsValid} = isValid;
    // prevend page reload on form submit
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })

    // find all inputs
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    //find submit button
    const buttonElement = formElement.querySelector(submitButtonSelector);


    // add listeners for each input
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            // check input is valid
            checkInputValidity(formElement, inputElement, restIsValid);
            toggleButtonState(buttonElement, inputList);
        });
    });
    // set initial button state
    toggleButtonState(buttonElement, inputList);
}

const enableValidation = (isValid) => {
    const {formSelector, ...restIsValid} = isValid;
    // find all forms 
    const formList = document.querySelectorAll(formSelector);
    // set event listeners each form
    formList.forEach((formElement) => {
        setEventListeners(formElement, restIsValid);
    })
};