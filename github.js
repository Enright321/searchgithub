class GitHub {
  constructor() {
    this.client_id = '350499ed8cd022e426b5';
    this.client_secret = 'e8868b1f4267c04e61272a2a9a3370e40bbb53e8';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
  }

  async getUser(user) {
    const profile_response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repo_response = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sorts=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profile_response.json();
    const repos = await repo_response.json();

    return {
      profile,
      repos
    }
  }
}

