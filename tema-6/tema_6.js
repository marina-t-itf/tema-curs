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

// let createButton = function() { 
//     for (let i = 0; i < 5; i++) {
//         let startButton = 'button';
//         let stepButton = 'button';
//         let counter = i + 1;
//         if ( i === 0) {
//             startButton [i] = document.createElement('button'); 
//             stepButton [i] = document.createTextNode('Step ' + counter);
//             startButton.appendChild(stepButton);
//             document.body.appendChild(Start);
//             document.getElementById('myStartButton').disabled = true;
          
//         }
//         if ( i === 1 && i < 4) {
//             startButton [i] = document.createElement('button'); 
//             stepButton [i] = document.createTextNode('Step ' + counter);
//             startButton.appendChild(stepButton);
//             document.body.appendChild(stepButton);
//             document.addEventListener("click", createButton);
            
         
//         }
//         if ( i === 4) {
//             startButton [i] = document.createElement('button'); 
//             stepButton [i] = document.createTextNode('Step ' + counter);
//             startButton.appendChild(stepButton);
//             document.body.appendChild(stepButton);
//             alert('You have reach the end, there are no more buttons');
//         }
   
//     // document.innerHTML = 'Step ' + counter;

//     //     let Start = document.createElement('button'); 
//     //     let stepButton = document.createTextNode('Step 1');
//     //     Start.appendChild(stepButton);
//     //     document.body.appendChild(Start);
//     //     document.getElementById('myStartButton').disabled = true;

           
            
//     }
//     //     document.addEventListener("click", createButton);
    
// };

// let startButton = document.createElement('button');
// startButton.innerText = 'Start!';
// document.body.appendChild(startButton);


// document.addEventListener("click", createButton);
let click3 = function() {
    let startButton = document.createElement('button'); 
        startButton.innerHTML = 'Step 3';
        // startButton.addEventListener('click', );

        document.body.appendChild(startButton);
};

let click2 = function() {
    let startButton = document.createElement('button'); 
        startButton.innerHTML = 'Step 2';
        startButton.addEventListener('click', click3);

        document.body.appendChild(startButton);
};

let click1 = function() {
    let startButton = document.createElement('button'); 
        startButton.innerHTML = 'Step 1';
        startButton.addEventListener('click', click2);

        document.body.appendChild(startButton);
};

let createButton = function(name, actionFunction) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.addEventListener('click', actionFunction);
    return button;
};
document.body.appendChild(createButton('Start', click1));

