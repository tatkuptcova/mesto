export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _getResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
        .then((res) => this._getResponse(res))
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers,
        })
        .then((res) => this._getResponse(res));
    }

    changeUserInfo(newName, newJob) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({ name: newName, about: newJob }),
        })
          .then((res) => this._getResponse(res));
      }

    postNewCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({ name: name, link: link }),
        })
          .then((res) => this._getResponse(res));
    }

    likesCount(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: this.headers,
        })
          .then(res => this._getResponse(res))
    }

}    