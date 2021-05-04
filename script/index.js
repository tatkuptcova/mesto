const editButton = document.querySelector('.profile__edit-button');
const popupCloseProfile = document.querySelector('.popup__close_profile');
const popupProfile = document.querySelector('.popup_profile');

const formElementProfile = document.querySelector('.popup__form_profile');

const nameInput = document.querySelector('.popup__item_input-name');
const jobInput = document.querySelector('.popup__item_input-about');

const nameDisplay = document.querySelector('#profileName');
const jobDisplay = document.querySelector('#profileAbout');

function openPopupProfile() { 
    popupProfile.classList.add('popup_opened');
    nameInput.value = nameDisplay.textContent;
    jobInput.value = jobDisplay.textContent;
}
  
function closePopupProfile() { 
    popupProfile.classList.remove('popup_opened');
}

function formSubmitProfileHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopupProfile()
}

editButton.addEventListener('click', openPopupProfile);
popupCloseProfile.addEventListener('click', closePopupProfile);

formElementProfile.addEventListener('submit', formSubmitProfileHandler);

const addButton = document.querySelector('.profile__button-add');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupNewCard = document.querySelector('.popup_card');

const formElementNewCard= document.querySelector('.popup__form_add');

const titleInput = document.querySelector('.popup__item_input-title');
const linkInput = document.querySelector('.popup__item_input-link');

const titleDisplay = document.querySelector('#nameplace');
const linkDisplay = document.querySelector('#place');

function openPopupNewCard() { 
  popupNewCard.classList.add('popup_opened');
  titleInput.value = titleDisplay.textContent;
  linkInput.value = linkDisplay.textContent;
}
  
function closePopupNewCard() { 
  popupNewCard.classList.remove('popup_opened');
}

function formSubmitNewCardHandler(evt) {
  evt.preventDefault();
  addCard(titleInput.value, linkInput.value)
  closePopupNewCard()
}

addButton.addEventListener('click', openPopupNewCard);
popupCloseAdd.addEventListener('click', closePopupNewCard);

formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);



const popupPic = document.querySelector('.popup_pic');
const popupCloseImage = document.querySelector('.popup__close_image');

popupCloseImage.addEventListener(
  'click', () => 
    closePopupPic()
)


function openPopupPic(link, title) {
  popupPic.classList.add('popup_opened');
  popupImage = document.querySelector('.popup__image');
  popupImage.src = link
  popupCaption = document.querySelector('.popup__caption');
  popupCaption.textContent = title
}

function closePopupPic() { 
  popupPic.classList.remove('popup_opened');
}

//popupCloseImage.addEventListener('click', closePopupPic);
popupPic.addEventListener('click', () => 
  closePopupPic()
);
