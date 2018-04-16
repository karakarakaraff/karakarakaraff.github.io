// TITLE
const titleText = "Kara Flaherty | Web Developer & Visual Designer";

// TOP NAVIGATION BAR
const topNavLinks = [
  ['Download resume', 'KaraFlaherty-resume.pdf']
];

// LOGO
const logoImg = 'assets/images/logo-kf.png';

// SOCIAL MEDIA
const linkedin = {
  link: 'https://www.linkedin.com/in/kara-flaherty',
  icon: 'fab fa-linkedin'
};
const twitter = {
  link: 'https://twitter.com/karakarakaraff',
  icon: 'fab fa-twitter'
};
const github = {
  link: 'https://github.com/karakarakaraff',
  icon: 'fab fa-github'
};

// MAIN NAVIGATION BAR
const mainNavLinks = [
  ['Home', 'http://www.karaflaherty.com'],
  ['Portfolio', 'portfolio.html'],
  ['Blog', 'blog.html'],
  ['Korea', 'korea.html']
];

// FOOTER
const copyright = {
  name: 'Kara Flaherty',
  year: new Date().getFullYear()
};

// FUNCTION TO LOAD AND ASSEMBLE EVERYTHING
window.onload = function() {

  if (document.getElementById('page-title') !== null) {
    const pageTitle = document.getElementById('page-title').innerHTML;
    document.title = `${pageTitle} | ${titleText}`;
  } else {
    document.title = `${titleText}`;
  }

  const topNav = document.getElementById('top-nav');
  topNav.innerHTML = '';
  for (let link of topNavLinks) {
    topNav.innerHTML += `<a class="nav-link" target="_blank" href="${link[1]}">${link[0]}</a>`;
  }

  const logo = document.getElementById('logo');
  logo.innerHTML = `<a href="http://www.karaflaherty.com"><img class="img-fluid" src="${logoImg}" alt="${copyright.name}"/></a>`;

  const socialMedia = document.getElementById('social-media');
  socialMedia.innerHTML = `<a rel="noopener noreferrer" target="_blank" href="${linkedin.link}"><i class="${linkedin.icon} fa-3x" data-fa-transform="shrink-6"></i></a><a rel="noopener noreferrer" target="_blank" href="${twitter.link}"><i class="${twitter.icon} fa-3x" data-fa-transform="shrink-6"></i></a><a rel="noopener noreferrer" target="_blank" href="${github.link}"><i class="${github.icon} fa-3x" data-fa-transform="shrink-6"></i></a>`;

  const mainNav = document.getElementById('main-nav');
  mainNav.innerHTML = '';
  for (let link of mainNavLinks) {
    mainNav.innerHTML += `<a class="nav-link" href="${link[1]}">${link[0]}</a>`;
  }

  const footer = document.getElementById('footer');
  footer.innerHTML = `&copy;${copyright.year} ${copyright.name}`;
};
