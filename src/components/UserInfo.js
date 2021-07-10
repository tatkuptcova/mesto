export default class UserInfo {
  
    constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
      this.name = document.querySelector(profileNameSelector);
      this.job = document.querySelector(profileJobSelector);
      this.avatar = document.querySelector(profileAvatarSelector);
    }
  
    getUserInfo() {
      return {
        name: this.name.textContent,
        job: this.job.textContent,
        userId: this._userId
      } 
    }
  
    setUserInfo(userId, newName, newJob, newAvatar) {
      this._userId = userId
      this.name.textContent = newName;
      this.job.textContent = newJob;
      this.avatar.src = newAvatar;
    }
  }