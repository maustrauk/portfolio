const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const linkedinSVG = document.getElementById('linkedin-svg');
const githubSVG = document.getElementById('github-svg');
const facebookSVG = document.getElementById('facebook-svg');
const twitterSVG = document.getElementById('twitter-svg');

function toggleButton() {
    navList.classList.toggle('show');
}

function onHoverLinkedin() {
   linkedinSVG.style.fill = '#00FFFF';
}

function onOutLinkedin() {
    linkedinSVG.style.fill = '#ffffff';
}

function onHoverGithub() {
    githubSVG.style.fill = '#00FFFF';
 }
 
function onOutGithub() {
    githubSVG.style.fill = '#ffffff';
 }

function onHoverFacebook() {
    facebookSVG.style.fill = '#00FFFF';
 }
 
function onOutFacebook() {
    facebookSVG.style.fill = '#ffffff';
 }

 function onHoverTwitter() {
    twitterSVG.style.fill = '#00FFFF';
 }
 
function onOutTwitter() {
    twitterSVG.style.fill = '#ffffff';
 }


hamburgerButton.addEventListener('click', toggleButton);

linkedinSVG.addEventListener('mouseover', onHoverLinkedin);
linkedinSVG.addEventListener('mouseout', onOutLinkedin);

githubSVG.addEventListener('mouseover', onHoverGithub);
githubSVG.addEventListener('mouseout', onOutGithub);

facebookSVG.addEventListener('mouseover', onHoverFacebook);
facebookSVG.addEventListener('mouseout', onOutFacebook);

twitterSVG.addEventListener('mouseover', onHoverTwitter);
twitterSVG.addEventListener('mouseout', onOutTwitter);