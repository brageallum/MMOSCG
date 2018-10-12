var sections = document.getElementsByClassName('fullPageSection');
var pageIndex = 0;
var pageIsScrolling = false;

window.scroll({
    top: 0,
    behavior: "instant"
});

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
            if (goToSlide(pageIndex) == true) {
                console.log('hi');
            }
    }
}, false);

function throttle(callback, timeDelta) {
    var now = Date.now();

    return (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (now + timeDelta <= Date.now()) {
            callback(e);
            now = Date.now();
        }
    };
}


document.addEventListener('wheel', throttle((e) => {
        if (e.deltaY > 0) {
            // DOWN
            pageIndex = (pageIndex < (sections.length-1)) ? pageIndex + 1 : pageIndex;
    
            goToSlide(pageIndex);
        } else if (e.deltaY < 0) {
            // UP
            pageIndex = (pageIndex > 0) ? pageIndex - 1 : pageIndex;
            
            goToSlide(pageIndex);
        }
    }, 1000));

function goToSlide(i) {
    console.log(i, sections[i].offsetTop);
    window.scroll({
        top: sections[i].offsetTop,
        behavior: "smooth"
    });
}