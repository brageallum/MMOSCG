var topBar = document.getElementById('topBar');
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 0) {
        topBar.setAttribute('class', 'fixed');
    } else {
        topBar.removeAttribute('class');
    }
    for (var i = 0; i < document.getElementsByClassName('fullPageSection'); i++) {
        if (window.scrollY > document.getElementsByClassName('fullPageSection')[i].offsetTop) {
            
        }
    }
});
/*
var sections = document.getElementsByClassName('fullPageSection');
var pageIndex = 0;

document.addEventListener('keydown', (e) => {
    ([40, 38, 87, 83].indexOf(e.keyCode) > -1) ? e.preventDefault() : null;
}, false);

document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 40:
            pageIndex += 1;
            goToSlide(pageIndex);
        break;
        case 38:
            pageIndex -= 1;
            goToSlide(pageIndex);
    }
}, false);


document.addEventListener('wheel', () => {
    
});

function goToSlide(i) {
    window.scroll({
        top: sections[i].offsetTop,
        behavior: 'smooth'
    });
}*/