const scrollBtn = document.getElementById('scroll');
const aboutSection = document.getElementById('about');

scrollBtn.addEventListener('click', () => aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}));