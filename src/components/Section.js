export default class Section {
    constructor({items,renderer}, elementsList) {
        this._items = items;
        this._renderer = renderer;
        this._elementsList = elementsList;
    }
  
    rendererItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    clear() {
        this._elementsList.innerHTML = '';
    }
  
    addItem(element) {
        this._elementsList.prepend(element);
    }
}