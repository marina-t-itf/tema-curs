// https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_right


let initialPositionSquare = function() {
    let square = document.querySelector('.popup');
    if (window.matchMedia('(max-width: 500px)').matches) {
        square.style.position = 'fixed';
        square.style.top = '5px';
        square.style.left = '5px';
    } else {
        square.style.position = 'fixed';
        square.style.top = '50px';
        square.style.left = '50px';
    }
};

initialPositionSquare();

let onSquareClick = function () {
    let square = document.querySelector('.popup');
    if (window.matchMedia('(max-width: 500px)').matches) {
        square.style.position = 'fixed';
        square.style.removeProperty('top');
        square.style.removeProperty('left');
        square.style.bottom = "5px";
        square.style.right = "5px";
    } else {
        square.style.position = 'fixed';
        square.style.removeProperty('top');
        square.style.removeProperty('left');
        square.style.bottom = "50px";
        square.style.right = "50px";
    } 
};

let adjustedSquare = document.querySelector('.popup');
adjustedSquare.addEventListener('click', onSquareClick);

