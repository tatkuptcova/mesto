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


function addCard(cardElement) { 
  elementsList.prepend(cardElement);
}

initialCards.forEach((element) => {
  const cardElement = createCard(element.name, element.link);
  addCard(cardElement);
})