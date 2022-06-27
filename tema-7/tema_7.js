// https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_right


let square = document.querySelector('.popup');

let init = function() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        square.style.top = "5px";
        square.style.left = "5px";
    }
    if (window.matchMedia('(min-width: 601px)').matches) {
        square.style.top = "50px";
        square.style.left = "50px";
    }
};

let onResize = function() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        if (square.style.top !== '') {
            square.style.top = "5px";
            square.style.left = "5px";
        } else {
            square.style.bottom = "5px";
            square.style.right = "5px";
        }
    }
    if (window.matchMedia('(min-width: 601px)').matches) {
        if (square.style.top !== '') {
            square.style.top = "50px";
            square.style.left = "50px";
        } else {
            square.style.bottom = "50px";
            square.style.right = "50px";
        }
    }
};

let toggle = function() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        if (square.style.top !== '') {
            square.style.removeProperty('top');
            square.style.removeProperty('left');
            square.style.bottom = "5px";
            square.style.right = "5px";
        } else {
            square.style.removeProperty('bottom');
            square.style.removeProperty('right');
            square.style.top = "5px";
            square.style.left = "5px";
        }
    }
    if (window.matchMedia('(min-width: 601px)').matches) {
        if (square.style.top !== '') {
            square.style.removeProperty('top');
            square.style.removeProperty('left');
            square.style.bottom = "50px";
            square.style.right = "50px";
        } else {
            square.style.removeProperty('bottom');
            square.style.removeProperty('right');
            square.style.top = "50px";
            square.style.left = "50px";
        }
    }
};

init();
square.addEventListener('click', toggle);
window.addEventListener('resize', onResize, true);

