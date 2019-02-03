class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
  <div class="card card-body mb-3">
  <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}" alt="user_img"/>
        <a href="${
          user.html_url
        }" class="btn btn-outline-primary btn-block mb-4" target="_blank" >View Profile</a>
      </div>
      <div class="col-md-9 col-sm m-auto">
            <span class="badge badge-primary">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success mt-2">Followers : ${
              user.followers
            }</span>
            <span class="badge badge-info mt-2">Following : ${
              user.following
            }</span>
            <br>
            <br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">MemberSince: ${user.created_at}</li>
            </ul>
      </div>
  </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
         <div id="repos"></div>


    `;
  }

  //Show Repositories
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
      <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
               <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge badge-secondary">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
            </div>
         </div>
      `;
    });
    document.querySelector('#repos').innerHTML = output;
  }
  //Show the alert
  showAlert(message, className) {
    //Remove iterate alertShow
    this.stopIterateDiv();
    //Set timeOut for Alert
    setTimeout(() => {
      this.stopIterateDiv();
    }, 3000);
    //Create element
    const div = document.createElement('div');
    //Add Class
    div.className = className;
    //Append message inside it
    div.appendChild(document.createTextNode(message));

    //Lets Add It to HTML-page
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    //Now insert the div
    container.insertBefore(div, search);
  }

  //Stop the duplicate alertShow
  stopIterateDiv() {
    const div = document.querySelector('.alert');
    if (div) {
      div.remove();
    }
  }

  //Clear Field
  clearField() {
    this.profile.innerHTML = '';
  }
}
