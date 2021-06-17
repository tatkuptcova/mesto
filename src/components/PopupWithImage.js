import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, title, link) {
        super(popupSelector);
        this._popupImage = document.querySelector('.popup__image');
        this._popupCaption = document.querySelector('.popup__caption');
        this._title = title
        this._link = link
    }

    open(){
        this._popupImage.src = this._link;
        this._popupCaption.textContent = this._title;
        super.open();
    }
}