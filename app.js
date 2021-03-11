// Init GitHub
const github = new GitHub;

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
        } else {
          // show profile
        }
      });
  } else {
    // Clear Profile

  }
});