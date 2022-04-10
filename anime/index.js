var red = document.getElementById('redball');
var green = document.getElementById('greenball')
var angle = 0;
var x = 0;
var y = 0; 
var w = window.innerWidth / 2;
var h = window.innerHeight / 2;
var speed = 0.2;


function moveCircles(){
    x = w + w * Math.cos(angle * Math.PI / 180);
    y = h + h * Math.sin(angle * Math.PI / 180);
    angle++;
    x = x * speed;
    y = y * speed;

    redball.style.left = x + 'px';
    redball.style.top = y + 'px';
    greenball.style.left = x + 'px';
    greenball.style.top = y + 'px';
    
    if(angle > 360){
        angle = 0;
    }
    setTimeout(moveCircles,20); 
    // 20 i can adjust if I want to change second
}



moveCircles();


