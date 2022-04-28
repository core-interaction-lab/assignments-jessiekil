(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var Nodes = {

  // Settings
  density: 6,
  reactionSensitivity: 3,

  points: [],
  lines: [[], []],
  mouse: { x: -1000, y: -1000, down: false },

  animation: null,

  canvas: null,
  context: null,

  init: function() {
    // Set up the visual canvas 
    this.canvas = document.getElementById( 'stripes' );
    this.context = this.canvas.getContext( '2d' );
    this.context.lineJoin = 'bevel';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.display = 'block'

    this.canvas.addEventListener('mousemove', this.mouseMove, false);
    this.canvas.addEventListener('mousedown', this.mouseDown, false);
    this.canvas.addEventListener('mouseup',   this.mouseUp,   false);
    this.canvas.addEventListener('mouseout',  this.mouseOut,  false);

    window.onresize = function(event) {
      Nodes.canvas.width = window.innerWidth;
      Nodes.canvas.height = Math.max(window.innerHeight, 670);
      Nodes.onWindowResize();    
    }

    this.preparePoints();
    this.draw();
    
  },

  preparePoints: function() {

    // Clear the current points
    this.points = [];
    this.lines = [[],[]];
    
    var width, height, i;
    var center = window.innerHeight / 2;

    for( i = -10; i < this.canvas.width + 10; i += this.density ) {

      var line1 = {y: center - 17, originalY: center - 10, color: '#68FFB7'};
      var line2 = {y: center - 17, originalY: center - 25, color: '#FF0099'};

      line1["x"] =  i;
      line1["originalX"] = i;
      
      line2["x"] =  i;
      line2["originalX"] = i;
      
      this.points.push(line1);
      this.points.push(line2);
      
      this.lines[0].push(line1);
      this.lines[1].push(line2);
    }
  },

  updatePoints: function() {

    var i, currentPoint, theta, distance;
    
    for (i = 0; i < this.points.length; i++ ){

      currentPoint = this.points[i];

      theta = Math.atan2( currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);

      if ( this.mouse.down ) {
        distance = this.reactionSensitivity * 300 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
         (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
      } else {
        distance = this.reactionSensitivity * 150 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
         (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));  
      }
      
      currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.07;
      currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.07;

    }
  },

  drawPoints: function() {

    var i, currentPoint;

    for (i = 0; i < 2; i++) {
      var line = this.lines[i];
      this.context.beginPath();
      this.context.lineJoin = 'round';
      this.context.moveTo( line[0].x, line[0].y);
      this.context.strokeStyle = line[0].color;
      this.context.lineWidth = 10;
      for (var j = 1; j < line.length - 2; j++) {
        var point = line[j];

        var xc = (point.x + line[j + 1].x) / 2;
        var yc = (point.y + line[j + 1].y) / 2;

        this.context.quadraticCurveTo(point.x, point.y, xc, yc);

      }
      this.context.stroke();
      this.context.closePath();
    }
  },

  draw: function() {
    this.animation = requestAnimationFrame( function(){ Nodes.draw() } );

    this.clear();
    this.updatePoints();
    this.drawPoints();

  },

  clear: function() {
    this.canvas.width = this.canvas.width;
  },

  mouseDown: function( event ){
    Nodes.mouse.down = true;
  },

  mouseUp: function( event ){
    Nodes.mouse.down = false;
  },
  
  mouseMove: function(event){
    Nodes.mouse.x = event.pageX;
    Nodes.mouse.y = event.pageY;
  },
  
  mouseOut: function(event){
    Nodes.mouse.x = -1000;
    Nodes.mouse.y = -1000;
    Nodes.mouse.down = false;
  },

  // Resize and redraw the canvas.
  onWindowResize: function() {
    cancelAnimationFrame( this.animation );
    this.preparePoints();
    this.draw();
  }

}

    // Start the app. 
    setTimeout( function() {
      Nodes.init();
    }, 10);


    var button = document.querySelector('.button'),
    background = document.querySelector('.backgroundHover'),
    firstWord = document.querySelectorAll('.button span'),
    secondWord = document.querySelectorAll('.button i');

// Timeline
var tl = new TimelineMax({paused: true});
tl.staggerTo(firstWord, 1, {color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.staggerTo(secondWord, 1, {color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.to(button, 0.3, {"border-color": "rgb(255,255,255,0)", ease: Quad.easeOut}, "#start");
tl.from(background, 0.25, {scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut}, "#start");

// HOVER
button.addEventListener("mouseenter", function(){
  tl.play();
});

button.addEventListener("mouseleave", function(){
  tl.reverse();
});