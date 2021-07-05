export default class UserInfo {
  
    constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
      this.name = document.querySelector(profileNameSelector);
      this.job = document.querySelector(profileJobSelector);
      this.avatar = document.querySelector(profileAvatarSelector);
    }
  
    getUserInfo() {
      return {
        name: this.name.textContent,
        job: this.job.textContent
      } 
    }
  
    setUserInfo(newName, newJob, newAvatar) {
      this.name.textContent = newName;
      this.job.textContent = newJob;
      this.avatar.scr = newAvatar;
    }
  }