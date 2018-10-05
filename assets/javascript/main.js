var topBar = document.getElementById('topBar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBar.setAttribute('class', 'fixed');
    } else {
        topBar.removeAttribute('class');
    }
});

var sections = document.getElementsByClassName('fullPageSection');
var pageIndex = 0;

document.addEventListener('keydown', (e) => {
    ([40, 38, 87, 83].indexOf(e.keyCode) > -1) ? e.preventDefault() : null;
}, false);

document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 40:

            break;
    }
}, false);