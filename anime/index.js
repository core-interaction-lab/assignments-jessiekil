var red = document.getElementById('redball');
var green = document.getElementById('greenball');
var yellow = document.getElementById('yellowball');
var purple = document.getElementById('purpleball');
var blue = document.getElementById('blueball');



var angle = 0;
var redX = 0;
var redY = 0;
var blueX = 0;
var blueY = 0; 
var greenX = 0; 
var greenY = 0; 
var purpleX = 0; 
var purpleY = 0; 
var yellowX = 0; 
var yelllowY = 0; 
var w = window.innerWidth / 2;
var h = window.innerHeight / 2;
var speed = 0.2;


function moveCircles(){
    redX = w + w * Math.cos(angle * Math.PI / 180);
    redY = h + h * Math.sin(angle * Math.PI / 180);
    blueX = w + w * Math.cos(angle * Math.PI / 120);
    blueY = h + h * Math.sin(angle * Math.PI / 120);
    purpleX = w + w * Math.cos(angle * Math.PI / 90);
    purpleY = h + h * Math.sin(angle * Math.PI / 90);
    yellowX = w + w * Math.cos(angle * Math.PI / 60);
    yellowY = h + h * Math.sin(angle * Math.PI / 60);
    greenX = w + w * Math.cos(angle * Math.PI / 45);
    greenY = h + h * Math.sin(angle * Math.PI / 45);
    angle++;
    
    redX = redX * speed;
    redY = redY * speed;
    blueX = blueX * speed;
    blueY = blueY * speed;
    yellowX = yellowX * speed;
    yellowY = yellowY * speed;
    greenX = greenX * speed;
    greenY = greenY * speed;
    purpleX = purpleX * speed;
    purpleY = purpleY * speed;

    redball.style.left = redX + 'px';
    redball.style.top = redY + 'px';
    greenball.style.left = greenX + 'px';
    greenball.style.top = greenY + 'px';
    purpleball.style.left = purpleX + 'px';
    purpleball.style.top = purpleY + 'px';
    yellowball.style.left = yellowX + 'px';
    yellowball.style.top = yellowY + 'px';
    blueball.style.left = blueX + 'px';
    blueball.style.top = blueY + 'px';

    if(angle > 360){
        angle = 0;
    }
    setTimeout(moveCircles,20); 
    // 20 i can adjust if I want to change second
}



moveCircles();


