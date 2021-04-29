let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

let titleInput = document.querySelector('.popup__item_input-title');
let linkInput = document.querySelector('.popup__item_input-link');

let nameDisplay = document.querySelector('#profileName');
let jobDisplay = document.querySelector('#profileAbout');

let titleDisplay = document.querySelector('#placesTitle');
let linkDisplay = document.querySelector('#placesLink');

let likeButtons = document.querySelectorAll('.places__button-like');



function openPopup() { 
    popup.classList.add('popup_opened');
    nameInput.value = nameDisplay.textContent;
    jobInput.value = jobDisplay.textContent;
    titleInput.value = titleDisplay.textContent;
    linkInput.value = linkDisplay.textContent;
}

//function openPopup() {
  //  popup.classList.add('popup_opened');
  //  titleInput.value = titleDisplay.textContent;
  //  linkInput.value = linkDisplay.textContent;
//}
  
function closePopup() { 
    popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault(); 
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    closePopup()
}

//function formSubmitHandler(evt) {
  //  evt.preventDefault();
    //titleDisplay.textContent = titleInput.value
    //linkDisplay.textContent = linkInput.value
//}


likeButtons.forEach(function(button) {
    button.addEventListener(
        'click', () => 
            button.classList.toggle('places__button-like_active')
    )    
})



editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);


formElement.addEventListener('submit', formSubmitHandler);



// for (let button of likeButtons) {
//     button.addEventListener(
//         'click', () => 
//             button.classList.toggle('places__button-like_active')
//     )    
//}