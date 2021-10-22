const links = {
  github: "PabloVeronezi",
  youtube: "channel/UCy68nqk1QxGhnGJZlXAC4Vw",
  instagram: "",
  facebook: "pveronezi",
  twitter: ""
};


function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com${links[social]}`;

  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      gitHubUser.href = data.html_url;
      login.textContent = data.login;
    });
}

getGitHubProfileInfos();