const showInputError = (formElement, inputElement, config) => {
    // show error
    const {inputErrorClass, errorActiveClass} = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorActiveClass);
}

const hideInputError = (formElement, inputElement, config) => {
    // hide error
    // find error element
    const {inputErrorClass, errorActiveClass} = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorActiveClass);
    errorElement.textContent = '';
}


const checkInputValidity = (formElement, inputElement, config) => {
    //check input is valid
    // if valid, hide error else show error
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    }else{
        showInputError(formElement, inputElement, config);
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

function setEventListeners(formElement, config) {
    const {inputSelector, submitButtomSelector, ...restConfig} = config;
    // prevend page reload on form submit
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })

    // find all inputs
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    //find submit button
    const buttonElement = formElement.querySelector(submitButtomSelector);


    // add listeners for each input
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            // check input is valid
            checkInputValidity(formElement, inputElement, restConfig);
            toggleButtonState(buttonElement, inputList);
        });
    });
    // set initial button state
    toggleButtonState(buttonElement, inputList);
}

const enableValidation = (config) => {
    const {formSelector, ...restConfig} = config;
    // find all forms 
    const formList = document.querySelectorAll(formSelector);
    // set event listeners each form
    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
    })
};