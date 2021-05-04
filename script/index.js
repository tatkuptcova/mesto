const editButton = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const popupProfile = document.querySelector('.popup_profile');

const formElementProfile = document.querySelector('.popup__form_profile');

const nameInput = document.querySelector('.popup__item_input-name');
const jobInput = document.querySelector('.popup__item_input-about');

const nameDisplay = document.querySelector('#profileName');
const jobDisplay = document.querySelector('#profileAbout');

const addButton = document.querySelector('.profile__button-add');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupNewCard = document.querySelector('.popup_card');

const formElementNewCard= document.querySelector('.popup__form_add');

const titleInput = document.querySelector('.popup__item_input-title');
const linkInput = document.querySelector('.popup__item_input-link');

const titleDisplay = document.querySelector('#nameplace');
const linkDisplay = document.querySelector('#place');


const popupPic = document.querySelector('.popup_pic');
const popupCloseImage = document.querySelector('.popup__close_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');


function openPopupProfile() { 
    nameInput.value = nameDisplay.textContent;
    jobInput.value = jobDisplay.textContent;
}
  
function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup(popupProfile)
}
 

function openPopupNewCard() { 
  titleInput.value = titleDisplay.textContent;
  linkInput.value = linkDisplay.textContent;
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
  openPopup(popupPic)
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
}


function closePopup(popup) { 
  popup.classList.remove('popup_opened');
}


formElementProfile.addEventListener('submit', formSubmitProfileHandler);


formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);


editButton.addEventListener('click', () => openPopup(popupProfile));
addButton.addEventListener('click', ()  => openPopup(popupNewCard));

popupCloseImage.addEventListener('click', () => closePopup(popupPic))
popupCloseAdd.addEventListener('click', () => closePopup(popupNewCard));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));