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

const formElementNewCard = document.querySelector('.popup__form_add');

const titleInput = document.querySelector('.popup__item_input-title');
const linkInput = document.querySelector('.popup__item_input-link');

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
 
const overlayClick = document.querySelectorAll('.popup');
for (let i = 0; i < overlayClick.length; i++) {
  overlayClick[i].addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      event.target.closest('.popup').classList.remove('popup_opened');
    }
  });
}

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
}



function closePopup(popup) {
  Popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


function closePopup(popup) { 
  popup.classList.remove('popup_opened');
  popup.querySelectorAll('form').forEach((form) => form.reset());
}

initialCards.forEach((element) => {
  const cardElement = createCard(element.name, element.link);
  addCard(cardElement);
})

formElementProfile.addEventListener('submit', formSubmitProfileHandler);

formElementNewCard.addEventListener('submit', formSubmitNewCardHandler);


editButton.addEventListener('click', () => openPopup(popupProfile));
addButton.addEventListener('click', ()  => openPopup(popupNewCard));

popupCloseImage.addEventListener('click', () => closePopup(popupPic));
popupCloseAdd.addEventListener('click', () => closePopup(popupNewCard));
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));