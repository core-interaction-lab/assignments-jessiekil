// JavaScript Drum Kit App
var x = document.getElementById("myAudio"); 

// function preloader()
	// {
		Image1= new Image(130,130)
		Image1.src = "bar.png"


		Image2= new Image(10,10)
		Image2.src = "minis.png"

		Image3= new Image(10,10)
		Image3.src = "neongreen.png"

		Image4= new Image(10,10)
		Image4.src = "bluecircle.png"

		Image5= new Image(10,10)
		Image5.src = "strokecircle.png"

		Image6= new Image(10,10)
		Image6.src = "orange.png"

		Image7= new Image(10,10)
		Image7.src = "pink.png"

		Image8= new Image(10,10)
		Image8.src = "waves.png"

		Image9= new Image(10,10)
		Image9.src = "twocircles.png"

		Image10= new Image(10,10)
		Image10.src = "wow.png"

		Image11= new Image(10,10)
		Image11.src = "balls.png"

		Image12= new Image(10,10)
		Image12.src = "triple.png"

		Image13= new Image(10,10)
		Image13.src = "balls.png"



		



		// Image2= new Image(16,11)
		// Image2.src = "trial.gif"
		// I dont need 16, 11 it's not necesssary
	// }

function playAudio() { 
	x.volume=0.4;
	x.play(); 
} 

function pauseAudio() { 
	x.pause(); 
}

function replayAudio() {
	x.volume=0.4;
	x.pause();
	x.currentTime=0;
	x.play();
}


function main() {
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

		const animateSvg = (btn, currentImg, currentAnim) => {
			const animations = ['gif1', 'gif2', 'gif3', 'gif4', 'gif5', 'gif6', 'gif7', 'gif8', 'gif9', 'gif10','gif11','gif12','gif13','gif14'];
			const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13];
			//const currentImg = images[Math.floor(Math.random()*images.length)];
			// const currentAnim = animations[Math.floor(Math.random()*animations.length)];
			const svgContainer = document.getElementById('svg-container');
			svgContainer.setAttribute('style', `position: absolute; top: ${btn.offsetTop}px; left: ${btn.offsetLeft}px`);
			svgContainer.classList.add('fade-in');
			console.log(currentImg);
			svgContainer.innerHTML = '';
			svgContainer.append(currentImg);
			currentImg.classList.add(currentAnim);
			// svgContainer.querySelector('.svg-rect').classList.add('animate');
			// svgContainer.querySelector('.svg-circ').classList.add('animate');
			currentImg.addEventListener('animationend', evt => {
				svgContainer.classList.remove('fade-in');
				svgContainer.style.opacity="0";
				svgContainer.innerHTML = '';
				// svgContainer.querySelector('svg').classList.remove('animate');
				// svgContainer.querySelector('.svg-circ').classList.remove('animate');
			})
		}

	const animateCrashOrRide = (e, img, currentAnim) => {
		// crashRide.style.transform = 'rotate(0deg) scale(1.5)';
		console.log(e, e.keyCode);
		const btnEl = document.querySelector(`div[data-key="${e.keyCode}"]`);
		console.log(btnEl.offsetLeft, btnEl.offsetTop);
		animateSvg(btnEl, img, currentAnim);
	};

	// --------------------------------------
	// const animateGif2 = (btn) => {
	// 	const svgContainer = document.getElementById('svg-container');
	// 		svgContainer.setAttribute('style', `position: absolute; top: ${btn.offsetTop}px; left: ${btn.offsetLeft}px`);
	// 		svgContainer.classList.add('fade-in');
	// 		console.log(Image2);
	// 		Image2.classList.add('gif2');
	// 		// Image2.style.opacity="1";
	// 		svgContainer.append(Image2);
	// 		Image2.addEventListener('animationend', evt => {
	
	// 			Image2.classList.remove('gif2');
	// 			// Image2.style.opacity="0";
	// 		})

	// }

// const callGif2 = (e) => {
// 	// crashRide.style.transform = 'rotate(0deg) scale(1.5)';
// 	console.log(e, e.keyCode);
// 	const btnEl = document.querySelector(`div[data-key="${e.keyCode}"]`);
// 	console.log(btnEl.offsetLeft, btnEl.offsetTop);
// 	animateGif2(btnEl);
// };

	// --------------------------------------

	const animateHiHatClosed = () => {
		hiHatTop.style.top = '171px';
	};

	const playSound = e => {
		console.log(e)
		const keyCode = e.keyCode,
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

		console.log(keyCode);
		switch(keyCode) {
			case 65:
				animateCrashOrRide(e, Image1, 'gif7');
				break;
			case 66:
				//callGif2(e);
				animateCrashOrRide(e, Image1, 'gif1');
				break;
			case 67:
				//callGif2(e);
				animateCrashOrRide(e, Image1, 'gif14');
				break;
			case 68:
				animateCrashOrRide(e, Image2, 'gif2');
				break;
			case 69:
				animateCrashOrRide(e, Image2, 'gif2');
				break;
			case 70:
				animateCrashOrRide(e, Image1, 'gif3');
				break;
			case 71:
				animateCrashOrRide(e, Image4, 'gif4');
				break;
			case 72:
				//callGif2(e);
				animateCrashOrRide(e, Image13, 'gif13');
				break;
			case 73:
				//callGif2(e);
				animateCrashOrRide(e, Image5, 'gif5');
				break;
			case 74:
				animateCrashOrRide(e, Image5, 'gif5');
				break;
			case 75:
				animateCrashOrRide(e, Image5, 'gif5');
				break;
			case 76:
				animateCrashOrRide(e, Image7, 'gif7');
				break;
			case 77:
				animateCrashOrRide(e, Image3, 'gif3');
				break;
			case 78:
				//callGif2(e);
				animateCrashOrRide(e, Image3, 'gif3');
				break;
			case 79:
				//callGif2(e);
				animateCrashOrRide(e, Image11, 'gif11');
				break;
			case 80:
				animateCrashOrRide(e, Image10, 'gif10');
				break;
			case 81:
				animateCrashOrRide(e, Image12, 'gif12');
				break;
			case 82:
				animateCrashOrRide(e, Image12, 'gif12');
				break;
			case 83:
				animateCrashOrRide(e, Image13, 'gif13');
				break;
			case 84:
				animateCrashOrRide(e, Image13, 'gif13');
				break;
			case 85:
				animateCrashOrRide(e, Image8, 'gif8');
				break;
			case 86:
				animateCrashOrRide(e, Image8, 'gif8');
				break;
			case 87:
				animateCrashOrRide(e, Image10, 'gif10');
				break;
			case 88:
				animateCrashOrRide(e, Image9, 'gif9');
				break;
			case 89:
				animateCrashOrRide(e, Image10, 'gif10');
				break;
			case 90:
				animateCrashOrRide(e, Image7, 'gif7');
				break;
			
		}	

		keyElement.classList.add(playingClass);
	};

	const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;

		e.target.style.top = '166px';
	};	

	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	const drumKeys = Array.from(document.querySelectorAll('.key'));

	// drumKeys.forEach(key => {
	// 	key.addEventListener('transitionend', removeKeyTransition);
	// });

	// crashRide.addEventListener('transitionend', removeCrashRideTransition);
	// hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

	window.addEventListener('keydown', playSound);
}



main();
// } 
// function main() {
// 	const playingClass = 'playing',
// 		crashRide = document.getElementById('crash-ride'),
// 		hiHatTop = document.getElementById('hihat-top');

// 		const animateSvg = (btn) => {
// 			const svgContainer = document.getElementById('svg-container');
// 			svgContainer.setAttribute('style', `position: absolute; top: ${btn.offsetTop}px; left: ${btn.offsetLeft}px`);
// 			svgContainer.classList.add('fade-in');
// 			svgContainer.querySelector('.svg-rect').classList.add('animate');
// 			svgContainer.querySelector('.svg-circ').classList.add('animate');
// 			svgContainer.querySelector('.svg-rect').addEventListener('animationend', evt => {
// 				svgContainer.classList.remove('fade-in');
// 				svgContainer.querySelector('svg').classList.remove('animate');
// 				svgContainer.querySelector('.svg-circ').classList.remove('animate');
// 			})

// 		}

// 	const animateCrashOrRide = (e) => {
// 		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
// 		console.log(e, e.keyCode);
// 		const btnEl = document.querySelector(`div[data-key="${e.keyCode}"]`);
// 		console.log(btnEl.offsetLeft, btnEl.offsetTop);
// 		animateSvg(btnEl);
// 	};


// 	const animateHiHatClosed = () => {
// 		hiHatTop.style.top = '171px';
// 	};

// 	const playSound = e => {
// 		console.log(e)
// 		const keyCode = e.keyCode,
// 			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

// 		if(!keyElement) return;

// 		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
// 		audioElement.currentTime = 0;
// 		audioElement.play();

// 		switch(keyCode) {
// 			case 69:
// 			case 82:
// 			case 72:
// 				animateCrashOrRide(e);
// 				break;
// 			case 75:
// 				animateHiHatClosed(e);
// 				break;
// 		}

// 		keyElement.classList.add(playingClass);
// 	};

// 	const removeCrashRideTransition = e => {
// 		if(e.propertyName !== 'transform') return;

// 		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
// 	};

// 	const removeHiHatTopTransition = e => {
// 		if(e.propertyName !== 'top') return;

// 		e.target.style.top = '166px';
// 	};	

// 	const removeKeyTransition = e => {
// 		if(e.propertyName !== 'transform') return;

// 		e.target.classList.remove(playingClass)
// 	};

// 	const drumKeys = Array.from(document.querySelectorAll('.key'));

// 	drumKeys.forEach(key => {
// 		key.addEventListener('transitionend', removeKeyTransition);
// 	});

// 	crashRide.addEventListener('transitionend', removeCrashRideTransition);
// 	hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

// 	window.addEventListener('keydown', playSound);
// }

// main();