let myButton = document.getElementById('btn-1');

const myButton2 = document.querySelector('.btn');

const allButton = document.querySelector('.btn')

var copy="this is var copy";

myButton=document.getElementById('btn-2');

console.log(copy);

console.log(myButton2);
console.log(allButton);

myButton.addEventListener('click', function (event) {
    alert('I clicked on the button');
});