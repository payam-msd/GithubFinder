//init the Github
const github = new Github();

//init the UI
const ui = new UI();

const input = document.getElementById('searchUser');

input.addEventListener('keyup', e => {
  const text = e.target.value;
  if (text !== '') {
    github.getUser(text).then(data => {
      if (data.profile.message === 'Not Found') {
        //Create alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //erase the input field
    ui.clearField();
  }
});
