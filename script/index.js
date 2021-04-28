let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

//let titleInput = document.querySelector('.popup__item_input-title');
//let linkInput = document.querySelector('.popup__item_input-link');

let nameDisplay = document.querySelector('#profileName');
let jobDisplay = document.querySelector('#profileAbout');

//let titleDisplay = document.querySelector('#placesTitle');
//let linkDisplay = document.querySelector('#placesLink');

let likeButtons = document.querySelectorAll('.places__button-like');



function openPopup() { 
    popup.classList.add('popup_opened');
    nameInput.value = nameDisplay.textContent;
    jobInput.value = jobDisplay.textContent;
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
// }




//class Popup {
 //   constructor() {
   //     this.add = document.querySelector('#popupAdd');
   //     this.submitAddButton = this.add.querySelector('.popup__button');
   //     this.edit = document.querySelector('#popupEdit');
   //     this.submitEditButton = this.edit.querySelector('.popup__button');
   //     this.pic = document.querySelector('#popupPic');
    //}
   // open(event) {
   //     if (event.target.classList.contains('user-info__button')) {
   //         this.add.classList.add('popup_is-opened');
   //     }
   //     if (event.target.classList.contains('user-info__edit-button')) {
   //         this.edit.classList.add('popup_is-opened');
   //         fullName.value = profileName.textContent;
   //         bio.value = profileJob.textContent;
   //         openingValidation(editForm);
   //     }
    //    if (event.target.classList.contains('place-card__image')) {
    //        this.pic.classList.add('popup_is-opened');
    //        this.pic.querySelector('.popup__picture').setAttribute('src', event.target.getAttribute('style').slice(22, -1));
    //    }
    //}
    //close(event) {
     //   event.path[2].classList.remove('popup_is-opened');

 // }
//}
