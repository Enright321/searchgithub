// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;


// Search Input
const search_user = document.getElementById('searchUser');

// Search input event Listener
search_user.addEventListener('keyup', (e) => {
  // Get input text
  const user_text = e.target.value;

  if (user_text !== '') {
    // Make http call
    github.getUser(user_text)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});