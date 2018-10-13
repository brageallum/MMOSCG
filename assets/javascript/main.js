// Handels scrolling the page with the arrow keys and wasd keys
var sections = document.getElementsByClassName('fullPageSection');

window.scroll({
    top: 0,
    behavior: "instant"
});

document.addEventListener('keydown', (e) => {
    // Prevent default action for the keys used for scrolling
    [40, 38, 87, 83].includes(e.keyCode) ? e.preventDefault() : null;
}, false);

document.addEventListener('keyup', (e) => {
    var scrollY = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var pageIndex = Math.round(scrollY / window.innerHeight);

    if ([40, 83].includes(e.keyCode) && pageIndex < sections.length - 1) {
        // SCROLL DOWN
        goToSlide(++pageIndex);
    } else if ([38, 87].includes(e.keyCode) && pageIndex > 0) {
        // SCROLL UP
        goToSlide(--pageIndex);
    }
}, false);

function goToSlide(i) {
    window.scroll({
        top: sections[i].offsetTop,
        behavior: "smooth"
    });
}