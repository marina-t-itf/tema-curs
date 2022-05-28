const paragraph = {
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

const paragraph1 = paragraph.name1 + paragraph.action1 + paragraph.prece + paragraph.phrase1 +'.';
const paragraph2 = paragraph.prece + paragraph.action2 + paragraph.phrase2 +'.';
const paragraph3 = paragraph.name1 + paragraph.action3 + paragraph.phrase3 +'.';
const paragraph4 = paragraph.name1 + paragraph.action4 + paragraph.prece + paragraph.phrase3 +'.';
const paragraph5 = paragraph.prece + paragraph.action2 + paragraph.phrase2 + paragraph.phrase4 +'.';
const delimitation = '======================================================';

document.getElementById("demo1").innerHTML =
paragraph1 + '<br>'+ paragraph2 + '<br>'+ paragraph3 + '<br>'+ paragraph4 + '<br>'+ paragraph5;

document.getElementById("demoDelimitation1").innerHTML = delimitation;

document.getElementById("demo2").innerHTML =
paragraph2 + '<br>'+ paragraph5 + '<br>'+ paragraph3 + '<br>'+ paragraph1 +'<br>'+ paragraph4;

document.getElementById("demoDelimitation2").innerHTML = delimitation;

document.getElementById("demo3").innerHTML =
paragraph3 + '<br>'+ paragraph5 + '<br>'+ paragraph4 + '<br>'+ paragraph1 + '<br>'+ paragraph2;