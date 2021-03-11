class GitHub {
  constructor() {
    this.client_id = '350499ed8cd022e426b5';
    this.client_secret = '0a344750bed80583d71efbf98f7e2c2c71c6c189';
  }

  async getUser(user) {
    const profile_response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profile_response.json();

    return {
      profile
    }
  }
}