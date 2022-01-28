let lastKnownScrollPosition = 0;
let ticking = false;
const btnAboutme = document.querySelector('.aboutme');
const btnSkill = document.querySelector('.skills');
const btnEducation = document.querySelector('.education');
const btnPortfolio = document.querySelector('.portfolio');
const btnContacts = document.querySelector('.contacts');

function doSomething(scrollPos) {
    const header = document.querySelector('header')
    if (lastKnownScrollPosition >= 100) {
        header.style.backgroundColor = '#FAFAFA'
        header.style.boxShadow = "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042);"
    } else {
        header.style.backgroundColor = 'transparent'
    }
}
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition)
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});

const scrollingTo = pos => {
    console.log(pos)
    window.scrollTo(0, pos)
}
console.log(btnAboutme)
btnAboutme.addEventListener('click', () => scrollingTo(719))
btnSkill.addEventListener('click', () => scrollingTo(1014))
btnEducation.addEventListener('click', () => scrollingTo(1626))
btnPortfolio.addEventListener('click', () => scrollingTo(2196))
btnContacts.addEventListener('click', () => scrollingTo(2840))