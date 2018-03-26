// TITLE
const titleText = "Website Name";

// TOP NAVIGATION BAR
const topNavLinks = [['Link1','https://#'],['Link2','https://#'],['Link3','https://#']];

// LOGO
const logoImg = 'assets/images/test.png';

// SOCIAL MEDIA
// TODO set up social media icons

// MAIN NAVIGATION BAR
const mainNavLinks = [['Link1','https://#'],['Link2','https://#'],['Link3','https://#']];

// FOOTER
const copyright = {
  year: new Date().getFullYear(),
  name: 'Name'
};

window.onload = function() {
  document.title = titleText;

  const topNav = document.getElementById('top-nav');
  for (let link of topNavLinks) {
    topNav.innerHTML += `<a class="nav-link" href="${link[1]}">${link[0]}</a>`;
  }

  const logo = document.getElementById('logo');
  logo.innerHTML = `<a href="index.html"><img class="img-fluid" src="${logoImg}" alt="${copyright.name}"/></a>`;

  const socialMedia = document.getElementById('social-media');
  socialMedia.innerHTML = `social media links go here`;

  const mainNav = document.getElementById('main-nav');
  mainNav.innerHTML = '';
  for (let link of mainNavLinks) {
    mainNav.innerHTML += `<a class="nav-link" href="${link[1]}">${link[0]}</a>`;
  }

  const footer = document.getElementById('footer');
  footer.innerHTML = `&copy;${copyright.year} ${copyright.name}`;
};
