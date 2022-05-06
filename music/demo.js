// JavaScript Drum Kit App
var x = document.getElementById("myAudio"); 

// function preloader()
	// {
		Image1= new Image(130,130)
		Image1.src = "bar.png"


		Image2= new Image(150,150)
		Image2.src = "gif2.gif"

		// Image2= new Image(16,11)
		// Image2.src = "trial.gif"
		// I dont need 16, 11 it's not necesssary
	// }

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 


} 
function main() {
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

		const animateSvg = (btn) => {
			const svgContainer = document.getElementById('svg-container');
			svgContainer.setAttribute('style', `position: absolute; top: ${btn.offsetTop}px; left: ${btn.offsetLeft}px`);
			svgContainer.classList.add('fade-in');
			console.log(Image1);
			svgContainer.append(Image1);
			Image1.classList.add('gif1');
			// svgContainer.querySelector('.svg-rect').classList.add('animate');
			// svgContainer.querySelector('.svg-circ').classList.add('animate');
			Image1.addEventListener('animationend', evt => {
				svgContainer.classList.remove('fade-in');
				svgContainer.style.opacity="0";
				// svgContainer.querySelector('svg').classList.remove('animate');
				// svgContainer.querySelector('.svg-circ').classList.remove('animate');
			})
		}

	const animateCrashOrRide = (e) => {
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
		console.log(e, e.keyCode);
		const btnEl = document.querySelector(`div[data-key="${e.keyCode}"]`);
		console.log(btnEl.offsetLeft, btnEl.offsetTop);
		animateSvg(btnEl);
	};

	// --------------------------------------
	const animateGif2 = (btn) => {
		const svgContainer = document.getElementById('svg-container');
			svgContainer.setAttribute('style', `position: absolute; top: ${btn.offsetTop}px; left: ${btn.offsetLeft}px`);
			svgContainer.classList.add('fade-in');
			console.log(Image2);
			Image2.classList.add('gif2');
			// Image2.style.opacity="1";
			svgContainer.append(Image2);
			Image2.addEventListener('animationend', evt => {
	
				Image2.classList.remove('gif2');
				// Image2.style.opacity="0";
			})

	}

const callGif2 = (e) => {
	// crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	console.log(e, e.keyCode);
	const btnEl = document.querySelector(`div[data-key="${e.keyCode}"]`);
	console.log(btnEl.offsetLeft, btnEl.offsetTop);
	animateGif2(btnEl);
};

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
			case 82:
				animateCrashOrRide(e);
				break;
			case 72:
				callGif2(e);
				break;
			case 87:
				callGif2(e);
				break;
			case 75:
				animateHiHatClosed(e);
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