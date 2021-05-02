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

const elementsList = document.querySelector('.elements__catalogue');
const elementTemplate = document.querySelector('#cards-template');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function addCard(title, link) {
  const initialCardElement = elementTemplate.content.querySelector('.elements__item').cloneNode(true);
  initialCardElement.querySelector('.elements__title').textContent = title;
  initialCardElement.querySelector('.elements__image').src = link;
  const likeButton = initialCardElement.querySelector('.elements__button-like');
  likeButton.addEventListener(
    'click', () => 
      likeButton.classList.toggle('elements__button-like_active')
  );
  const deleteButton = initialCardElement.querySelector('.elements__button-delete');
  deleteButton.addEventListener(
    'click', () =>
    initialCardElement.remove()
  )
  
  elementsList.prepend(initialCardElement);
}

initialCards.forEach((element) => {
  addCard(element.name, element.link);
})

