let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    const header = document.querySelector('header')
    if (lastKnownScrollPosition >= 656) {
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