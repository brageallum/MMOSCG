var sections = document.getElementsByClassName('fullPageSection');

function getCurrentPageIndex() {
    var scrollY = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var pageIndex = Math.round(scrollY / window.innerHeight);
    return pageIndex;
}

function goToSlide(i) {
    window.scroll({
        top: sections[i].offsetTop,
        behavior: "smooth"
    });
}

function goToSlideId(id) {
    var section = document.querySelectorAll('.fullPageSection' + id)[0];
    window.scroll({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

goToSlide(0);


// Handles scrolling the page with the arrow keys and wasd keys
document.addEventListener('keydown', (e) => {
    // Prevent default action for the keys used for scrolling
    [40, 38, 87, 83].includes(e.keyCode) ? e.preventDefault() : null;
}, false);

document.addEventListener('keyup', (e) => {
    var pageIndex = getCurrentPageIndex();

    if ([40, 83].includes(e.keyCode) && pageIndex < sections.length - 1) {
        // SCROLL DOWN
        goToSlide(++pageIndex);
    } else if ([38, 87].includes(e.keyCode) && pageIndex > 0) {
        // SCROLL UP
        goToSlide(--pageIndex);
    }
}, false);


// Handle navigation with the navbar
var navItems = document.querySelectorAll('#topBar .navItem');
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', (e) => {
        e.preventDefault();
        goToSlideId(e.target.getAttribute('href'));
    });
}


// Handle parallax scrolling of the phone image in the hero
var phone = document.getElementById('heroPhone');
window.addEventListener('scroll', () => {
    phone.style.bottom = -200* (window.scrollY/window.innerHeight) +"px";
});


// Handle highlighting the correct link in the navbar
function highlightCurrentPageInNavbar() {
    var index = getCurrentPageIndex();
    var sectionId = sections[index].getAttribute('id');
    if (document.querySelectorAll('#topBar .navItem[href="#' + sectionId + '"]').length == 0) return;
    document.querySelectorAll('#topBar .navItem.current')[0].classList.remove('current');
    document.querySelectorAll('#topBar .navItem[href="#' + sectionId + '"]')[0].classList.add('current');
}

window.addEventListener('scroll', () => {
    highlightCurrentPageInNavbar();
});