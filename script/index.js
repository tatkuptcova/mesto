const editButton = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function openPopup() { 
    popup.classList.add('popup_opened');
}
  
function closePopup() { 
    popup.classList.remove('popup_opened');
}
  
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
  


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__item_input-name');
let jobInput = document.querySelector('.popup__item_input-about');

let nameDisplay = document.querySelector('#profileName');
let jobDisplay = document.querySelector('#profileAbout');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    nameDisplay.textContent = nameInput.value
    jobDisplay.textContent = jobInput.value
    // Вставьте новые значения с помощью textContent
    closePopup()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



//let likeButtons = document.querySelectorAll('.like__button');
// for (let button of likeButtons) {
//     button.addEventListener(
//         'click', () => 
//             button.classList.toggle('button__like_active')
//     )    
// }

//likeButtons.forEach(function(button) {
  //  button.addEventListener(
  //      'click', () => 
   //         button.classList.toggle('like__button_active')
   // )    
//})