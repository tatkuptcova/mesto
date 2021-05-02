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
    name: 'Монт-Сан Мишель',
    link: 'https://images.unsplash.com/photo-1596436831831-87dd84a69101?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Мичиган',
    link: 'https://images.unsplash.com/photo-1618767438211-11ffdb8e1861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
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
  const cardElement = elementTemplate.content.querySelector('.elements__item').cloneNode(true);

  cardElement.querySelector('.elements__title').textContent = title;

  img = cardElement.querySelector('.elements__image')
  img.src = link;
  img.addEventListener(
    'click', () => 
      openPopupPic(img.src)
  )

  
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
  
  elementsList.prepend(cardElement);
}

initialCards.forEach((element) => {
  addCard(element.name, element.link);
})

const popupPic = document.querySelector('.popup__pic');
const popupCloseImage = document.querySelector('.popup__close_image');
const popupName = document.querySelector('.popup__name');

popupCloseImage.addEventListener(
  'click', () => 
    closePopupPic()
)


function openPopupPic(link) {
  popupPic.classList.add('popup_opened');
  popupImage = document.querySelector('.popup__image');
  popupImage.src = link
}

function closePopupPic() { 
  popupPic.classList.remove('popup_opened');
}

//popupCloseImage.addEventListener('click', closePopupPic);
popupPic.addEventListener('click', () => 
  closePopupPic()
);