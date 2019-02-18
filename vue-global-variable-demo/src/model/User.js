class User {
  constructor(name) {
    this.name = name;
    this.roles = ['user'];
    this.logged = false;
  }

  isLogged() {
    return this.logged;
  }

  isAdmin() {
    return this.roles.includes('admin');
  }

  setAsAdmin() {
    const index = this.roles.indexOf('admin');
    if (index === -1) {
      this.roles.push('admin');
    }
  }

  setAsUser() {
    const index = this.roles.indexOf('admin');
    if (index > -1) {
      this.roles.splice(index, 1);
    }
  }

  copy(user) {
    Object.assign(this, user);
  }
}
export default User;
