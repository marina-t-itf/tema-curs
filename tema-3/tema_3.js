//homework item 1 and 2
let paragraph = {
name1 : ' Jane Smith ',
action1 : ' has ',
action2 : ' is ',
action3 : ' plans ',
action4 : ' will use her ',
prece : ' $12,450 ',
phrase1 : ' in her bank account',
phrase2 : ' a lot of money',
phrase3 : ' to buy a Toyota Yaris',
phrase4 : ' for a Toyota Yaris'
};

let paragraph1 = paragraph.name1 + paragraph.action1 + paragraph.prece + paragraph.phrase1 +'.';
let paragraph2 = paragraph.prece + paragraph.action2 + paragraph.phrase2 +'.';
let paragraph3 = paragraph.name1 + paragraph.action3 + paragraph.phrase3 +'.';
let paragraph4 = paragraph.name1 + paragraph.action4 + paragraph.prece + paragraph.phrase3 +'.';
let paragraph5 = paragraph.prece + paragraph.action2 + paragraph.phrase2 + paragraph.phrase4 +'.';
let delimitation = '======================================================';

document.getElementById("demo1").innerHTML =
paragraph1 + '<br>'+ paragraph2 + '<br>'+ paragraph3 + '<br>'+ paragraph4 + '<br>'+ paragraph5;

document.getElementById("demoDelimitation1").innerHTML = delimitation;

document.getElementById("demo2").innerHTML =
paragraph2 + '<br>'+ paragraph5 + '<br>'+ paragraph3 + '<br>'+ paragraph1 +'<br>'+ paragraph4;

document.getElementById("demoDelimitation2").innerHTML = delimitation;

document.getElementById("demo3").innerHTML =
paragraph3 + '<br>'+ paragraph5 + '<br>'+ paragraph4 + '<br>'+ paragraph1 + '<br>'+ paragraph2;

//homework item 3
let paragraphLine = myParagraph ();
document.getElementById("demoFunction").innerHTML = paragraphLine;

function myParagraph() {
    return paragraph1 + '<br>'+ paragraph2 + '<br>'+ paragraph3 + '<br>'+ paragraph4 + '<br>'+ paragraph5 +'<br>'+'<br>'+
    delimitation +'<br>'+'<br>'+
    paragraph2 + '<br>'+ paragraph5 + '<br>'+ paragraph3 + '<br>'+ paragraph1 +'<br>'+ paragraph4 +'<br>'+'<br>'+
    delimitation +'<br>'+ '<br>'+
    paragraph3 + '<br>'+ paragraph5 + '<br>'+ paragraph4 + '<br>'+ paragraph1 + '<br>'+ paragraph2;
}

