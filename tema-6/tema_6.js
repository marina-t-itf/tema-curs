let alertSecondButton = function() {
    alert('The second button was pressed');
    document.getElementById("secondButton").innerHTML = 'The second button was pressed';
};

// let createButton = function() {
//     let Start = document.createElement('button'); 
//     let stepButton = document.createTextNode('Step 1');
//     Start.appendChild(stepButton);
//     document.body.appendChild(Start);
//     document.getElementById('myStartButton').disabled = true;
//     if (this.Start === true && this.stepButton === true) {
//         for (let i = 0; i < 5; i++) {
//             let counter = i + 1;
//             this.startButton [i] = document.createElement('button');
//             let start2Button = document.createTextNode('Step ' + counter );
//             // document.body.appendChild(this.startButtontart);
           
//             document.innerHTML = 'Step ' + counter;
//             return this;
//         }
        
//     }
//     document.addEventListener("click", createButton);

// };

//subiectul 3
let alertButton = function() {
    alert('You have reach the end, there are no more buttons!');
    
};

// let click5 = function() {
//     let startButton = document.createElement('button'); 
//         startButton.innerHTML = 'Step 5';
//         startButton.addEventListener('click', alertButton);
        
//         document.body.appendChild(startButton);
        
// };

// let click4 = function() {
//     let startButton = document.createElement('button'); 
//         startButton.innerHTML = 'Step 4';
//         startButton.addEventListener('click', click5);

//         document.body.appendChild(startButton);
// };


// let click3 = function() {
//     let startButton = document.createElement('button'); 
//         startButton.innerHTML = 'Step 3';
//         startButton.addEventListener('click', click4);

//         document.body.appendChild(startButton);
// };

// let click2 = function() {
//     let startButton = document.createElement('button'); 
//         startButton.innerHTML = 'Step 2';
//         startButton.addEventListener('click', click3);

//         document.body.appendChild(startButton);
// };

// let click1 = function() {
//     let startButton = document.createElement('button'); 
//         startButton.innerHTML = 'Step 1';
//         startButton.addEventListener('click', click2);

//         document.body.appendChild(startButton);
// };

// let createButton = function(name, actionFunction) {
//     let button = document.createElement('button');
//     button.innerHTML = name;
//     button.addEventListener('click', actionFunction);
//     return button;
// };
// document.body.appendChild(createButton('Start', click1));

// subiectul 1 creativitate

let createButton1 = function(name, action) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.addEventListener('click', action);
    return button;
};

let action5 = function() {
    let b6 = createButton1('Step 5', alertButton);
    document.body.appendChild(b6);
};

let action4 = function() {
    let b5 = createButton1('Step 4', action5);
    document.body.appendChild(b5);
};

let action3 = function() {
    let b4 = createButton1('Step 3', action4);
    document.body.appendChild(b4);
};

let action2 = function() {
    let b3 = createButton1('Step 2', action3);
    document.body.appendChild(b3);
};

let action1 = function() {
    let b2 = createButton1('Step 1', action2);
    document.body.appendChild(b2);
};


let b1 = createButton1('Start', action1);
document.body.appendChild(b1);

