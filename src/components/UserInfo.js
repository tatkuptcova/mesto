export default class UserInfo {
    constructor({profileNameSelector, profileJobSelector}) {
      this.name = document.querySelector(profileNameSelector);
      this.job = document.querySelector(profileJobSelector);
    }
  
    getUserInfo() {
      return {
        name: this.name.textContent,
        job: this.job.textContent
      } 
    }
  
    setUserInfo(newName, newJob) {
      const data = this.getUserInfo();
      const {name, job} = data;
      name.textContent = newName;
      job.textContent = newJob;
    }
  }