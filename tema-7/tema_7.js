// https://www.w3schools.com/cssref/tryit.asp?filename=trycss_js_right

let onSquareClick = function () {
    // let theSquare = document.querySelector('.square');
    // theSquare.style.right = '50px';
    // document.getElementsByClassName('square').style.right= '50px';
    let square = document.querySelector('.sqaure');
    square.style.width = '200px';
};


let adjustedSquare = document.querySelector('.square');
adjustedSquare.addEventListener('click', onSquareClick);