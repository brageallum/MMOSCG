var sections = document.getElementsByClassName('fullPageSection');
var pageIndex = 0;

window.scroll({
    top: 0,
    behavior: "instant"
});

document.addEventListener('keydown', (e) => {
    ([40, 38, 87, 83].indexOf(e.keyCode) > -1) ? e.preventDefault() : null;
}, false);

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 40 && pageIndex < sections.length - 1) {
        goToSlide(++pageIndex);
    } else if (e.keyCode == 38 && pageIndex > 0) {
        goToSlide(--pageIndex);
    }
}, false);

function goToSlide(i) {
    window.scroll({
        top: sections[i].offsetTop,
        behavior: "smooth"
    });
}