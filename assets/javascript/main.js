// Handels scrolling the page with the arrow keys and wasd keys
var sections = document.getElementsByClassName('fullPageSection');

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
goToSlide(0);

// Handles scrolling with navigation bar
var navItem = document.getElementsByClassName('navItem');

for(var i = 0; i < navItem.length; i++) {
    (function(i) {
        navItem[i].addEventListener('click', (e) => {
            e.preventDefault();
            for (var j = 0; j < navItem.length; j++) {
                navItem[j].setAttribute('class', 'navItem');
            }
            navItem[i].setAttribute('class', 'navItem current');
        }, false);
    }(i));
}

var phone = document.getElementById('heroPhone');
window.addEventListener('scroll', () => {
    phone.style.bottom = -200* (window.scrollY/window.innerHeight) +"px";
});