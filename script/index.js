const editButton = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const popupProfile = document.querySelector('.popup_profile');

const formElementProfile = document.querySelector('.popup__form_profile');

const nameInput = document.querySelector('.popup__input_edit-name');
const jobInput = document.querySelector('.popup__input_edit-about');

const nameDisplay = document.querySelector('#profileName');
const jobDisplay = document.querySelector('#profileAbout');

const addButton = document.querySelector('.profile__button-add');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupNewCard = document.querySelector('.popup_card');

const formElementNewCard = document.querySelector('.popup__form_add');

const titleInput = document.querySelector('.popup__input_add-title');
const linkInput = document.querySelector('.popup__input_add-link');

const titleDisplay = document.querySelector('#nameplace');
const linkDisplay = document.querySelector('#place');


const popupPic = document.querySelector('.popup_pic');
const popupCloseImage = document.querySelector('.popup__close_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const elementsList = document.querySelector('.elements__catalogue');
const elementTemplate = document.querySelector('#cards-template');

function createCard(title, link) {
    const cardElement = elementTemplate.content.querySelector('.elements__item').cloneNode(true);

    const caption = cardElement.querySelector('.elements__title');
    caption.textContent = title

    const img = cardElement.querySelector('.elements__image');

    img.src = link;
    img.alt = title;

    img.addEventListener('click', () =>  openPopupPic(link, title))

    const likeButton = cardElement.querySelector('.elements__button-like');
    likeButton.addEventListener(
      'click', () => 
        likeButton.classList.toggle('elements__button-like_active')
    );

    const deleteButton = cardElement.querySelector('.elements__button-delete');
    deleteButton.addEventListener(
      'click', () =>
      cardElement.remove()
    )

    return cardElement
}

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
};

const popupList = document.querySelectorAll('.popup');
popupList.forEach((popup) => {
    popup.addEventListener( 'click', (popup) => {
        if (popup.target === popup.currentTarget) {
            popup.target.closest('.popup').classList.remove('popup_opened');
        };
    });
});

function addCard(cardElement) { 
    elementsList.prepend(cardElement);
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup(popupProfile)
}

function formSubmitNewCardHandler(evt) {
    evt.preventDefault();
    const cardElement = createCard(titleInput.value,  linkInput.value);
    addCard(cardElement);
    closePopup(popupNewCard)
}

function openPopupPic(link, title) {
    // popupImage = document.querySelector('.popup__image');
    popupImage.src = link
    // popupCaption = document.querySelector('.popup__caption');
    popupCaption.textContent = title
    popupCaption.alt = title
    openPopup(popupPic)
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscClose);
}

function closePopup(popup) { 
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscClose);
    
}

function reinitPopupForm(popup) {
    const {formSelector, inputSelector, submitButtonSelector, ...rest} = validationConfig;
    popup.querySelectorAll(formSelector).forEach((form) => {
        form.reset()
        inputElements = Array.from(form.querySelectorAll(inputSelector))

        toggleButtonState(form.querySelector(submitButtonSelector), inputElements)
        
        inputElements.forEach((inputElement) => {
            hideInputError(form, inputElement, rest)
        });
    });
}
  
function handleEscClose(evt) {
    if (evt.key === 'Escape') {
       closePopup(document.querySelector('.popup_opened'));
    }
}

initialCards.forEach((element) => {
    const cardElement = createCard(element.name, element.link);
    addCard(cardElement);
})

formElementProfile.addEventListener('submit', formSubmitProfileHandler);

formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);


editButton.addEventListener('click', () => {
    openPopup(popupProfile);
    reinitPopupForm(popupProfile);
});
addButton.addEventListener('click', ()  => {
    openPopup(popupNewCard);
    reinitPopupForm(popupNewCard);
});

popupCloseImage.addEventListener('click', () => closePopup(popupPic));
popupCloseAdd.addEventListener('click', () => closePopup(popupNewCard));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));

enableValidation(validationConfig);