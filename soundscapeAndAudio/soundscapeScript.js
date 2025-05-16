window.onload = function() {
window.points = parseInt(localStorage.getItem("points")) || 0;
const pointsDisplay = document.getElementById("points");
pointsDisplay.textContent = window.points;
function _0x30ed(_0x296fa0,_0x1469f3){var _0x270dc9=_0x270d();return _0x30ed=function(_0x30edd6,_0xa56da1){_0x30edd6=_0x30edd6-0x136;var _0x1c4e1e=_0x270dc9[_0x30edd6];return _0x1c4e1e;},_0x30ed(_0x296fa0,_0x1469f3);}var _0x167d4f=_0x30ed;function _0x270d(){var _0x14cb49=['9567cujrDI','1912kebRgV','Programmed\x20by\x20Nicole\x20Castro\x20based\x20on\x20her\x20ideas\x20and\x20those\x20of\x20Nitika\x20Nitheeswaran.\x20Business\x20plan,\x20partnerships,\x20and\x20app-layout\x20attributed\x20to\x20Aaima\x20Hussain\x20and\x20Hareem\x20Hussain.\x20Jana\x20El\x20Zuway\x20commented\x20on\x20our\x20team\x20journey\x20and\x20assisted\x20Nitika\x20with\x20pitch;\x20she\x20is\x20the\x20marketing\x20lead.\x20Nitika\x20Nitheeswaran\x20also\x20produced\x20product\x20designs\x20and\x20the\x20pitch\x20video.\x20Techinical\x20video,\x20final\x20graphics,\x20programming,\x20logo\x20and\x20name\x20by\x20Nicole\x20Castro.','27822810tkpUBx','1827036EDEtWC','2633730qVEIFV','68844rPRanv','3243410lIwmAD','34BLZxJs','77sJluaz','63179EcKmBb','log'];_0x270d=function(){return _0x14cb49;};return _0x270d();}(function(_0x4ad65b,_0x428b79){var _0x5b7d78=_0x30ed,_0x346e4d=_0x4ad65b();while(!![]){try{var _0x284de9=-parseInt(_0x5b7d78(0x139))/0x1*(parseInt(_0x5b7d78(0x137))/0x2)+-parseInt(_0x5b7d78(0x140))/0x3+parseInt(_0x5b7d78(0x13f))/0x4+-parseInt(_0x5b7d78(0x136))/0x5+-parseInt(_0x5b7d78(0x141))/0x6*(parseInt(_0x5b7d78(0x138))/0x7)+-parseInt(_0x5b7d78(0x13c))/0x8*(-parseInt(_0x5b7d78(0x13b))/0x9)+parseInt(_0x5b7d78(0x13e))/0xa;if(_0x284de9===_0x428b79)break;else _0x346e4d['push']
	(_0x346e4d['shift']());}catch(_0x549d76){_0x346e4d['push']
	(_0x346e4d['shift']());}}}(_0x270d,0xbb128),console[_0x167d4f(0x13a)](_0x167d4f(0x13d)));
window.streakNumber = parseInt(localStorage.getItem("streakNumber")) || 0;
const streakDisplay = document.getElementById("streakNumber");
streakDisplay.textContent = window.streakNumber;
}

//RAIN AUDIO
 var rainActive = false; 
 var rainAudio = new Audio('rainAudio.mp3');
 rainAudio.loop = true;
 var rainVolumeRng = document.getElementById('rainVolumeRng')
 
 function rainPlay() {
 if (rainActive === false) {
 rainAudio.play(); //Plays the audio and shows an active status
 rainActive = true;
 }
 else {
 rainAudio.pause();
 rainActive = false;
 }
 }
 
 //VOLUME CONTROL
 function rainVolume() {
rainAudio.volume = rainVolumeRng.value / 100;
 }
rainVolumeRng.addEventListener("input", rainVolume); //Updates when range is changed
 
 //OCEAN AUDIO
 var oceanActive = false; 
 var oceanAudio = new Audio('oceanAudio.mp3');
 oceanAudio.loop = true;
 var oceanVolumeRng = document.getElementById('oceanVolumeRng')
 
 function oceanPlay() {
 if (oceanActive === false) {
 oceanAudio.play(); // PLAY THE AUDIO AND SHOW ACTIVE STATUS
 oceanActive = true;
 }
 else {
 oceanAudio.pause();
 oceanActive = false;
 }
 }
  //VOLUME CONTROL
 function oceanVolume() {
oceanAudio.volume = oceanVolumeRng.value / 100;
 }
oceanVolumeRng.addEventListener("input", oceanVolume); //Updates when range is changed

//URBAN AMBIENCE
 var urbanActive = false; 
 var urbanAudio = new Audio('urbanAudio.mp3');
 urbanAudio.loop = true;
 var urbanVolumeRng = document.getElementById('urbanVolumeRng')
 
 function urbanPlay() {
 if (urbanActive === false) {
 urbanAudio.play(); // PLAY THE AUDIO AND SHOW ACTIVE STATUS
 urbanActive = true;
 }
 else {
 urbanAudio.pause();
 urbanActive = false;
 }
 }
  //VOLUME CONTROL
 function urbanVolume() {
urbanAudio.volume = urbanVolumeRng.value / 100;
 }
urbanVolumeRng.addEventListener("input", urbanVolume); //Updates when range is changed
//BROWN NOISE
 var brownActive = false; 
 var brownAudio = new Audio('brownAudio.mp3');
 brownAudio.loop = true;
 var brownVolumeRng = document.getElementById('brownVolumeRng')
 
 function brownPlay() {
 if (brownActive === false) {
 brownAudio.play(); // PLAY THE AUDIO AND SHOW ACTIVE STATUS
 brownActive = true;
 }
 else {
 brownAudio.pause();
 brownActive = false;
 }
 }
 //VOLUME CONTROL
 function brownVolume() {
brownAudio.volume = brownVolumeRng.value / 100;
 }
brownVolumeRng.addEventListener("input", brownVolume); //Updates when range is changed

//TIMER
//RAIN AUDIO
 var rainActive = false; 
 var rainAudio = new Audio('rainAudio.mp3');
 rainAudio.loop = true;
 var rainVolumeRng = document.getElementById('rainVolumeRng')
 
 function rainPlay() {
 if (rainActive === false) {
 rainAudio.play(); //Plays the audio and shows an active status
 rainActive = true;
 }
 else {
 rainAudio.pause();
 rainActive = false;
 }
 }
 
 //VOLUME CONTROL
 function rainVolume() {
rainAudio.volume = rainVolumeRng.value / 100;
 }
rainVolumeRng.addEventListener("input", rainVolume); //Updates when range is changed
 
 //OCEAN AUDIO
 var oceanActive = false; 
 var oceanAudio = new Audio('oceanAudio.mp3');
 oceanAudio.loop = true;
 var oceanVolumeRng = document.getElementById('oceanVolumeRng')
 
 function oceanPlay() {
 if (oceanActive === false) {
 oceanAudio.play(); // PLAY THE AUDIO AND SHOW ACTIVE STATUS
 oceanActive = true;
 }
 else {
 oceanAudio.pause();
 oceanActive = false;
 }
 }
  //VOLUME CONTROL
 function oceanVolume() {
oceanAudio.volume = oceanVolumeRng.value / 100;
 }
oceanVolumeRng.addEventListener("input", oceanVolume); //Updates when range is changed

//URBAN AMBIENCE
 var urbanActive = false; 
 var urbanAudio = new Audio('urbanAudio.mp3');
 urbanAudio.loop = true;
 var urbanVolumeRng = document.getElementById('urbanVolumeRng')
 
 function urbanPlay() {
 if (urbanActive === false) {
 urbanAudio.play(); // PLAY THE AUDIO AND SHOW ACTIVE STATUS
 urbanActive = true;
 }
 else {
 urbanAudio.pause();
 urbanActive = false;
 }
 }
  //VOLUME CONTROL
 function urbanVolume() {
urbanAudio.volume = urbanVolumeRng.value / 100;
 }
urbanVolumeRng.addEventListener("input", urbanVolume); //Updates when range is changed
//BROWN NOISE
 var brownActive = false; 
 var brownAudio = new Audio('brownAudio.mp3');
 brownAudio.loop = true;
 var brownVolumeRng = document.getElementById('brownVolumeRng')
 
 function brownPlay() {
 if (brownActive === false) {
 brownAudio.play(); // PLAY THE AUDIO AND SHOW ACTIVE STATUS
 brownActive = true;
 }
 else {
 brownAudio.pause();
 brownActive = false;
 }
 }
 //VOLUME CONTROL
 function brownVolume() {
brownAudio.volume = brownVolumeRng.value / 100;
 }
brownVolumeRng.addEventListener("input", brownVolume); //Updates when range is changed

//TIMER

const startMinutes = 10;
let time = startMinutes * 60;
// Initialize points from localStorage
const timerDisplay = document.getElementById('timer');

let timerInterval = setInterval(updateTimer, 1000);

function resetTimer() {
    clearInterval(timerInterval); // Clears interval
    time = startMinutes * 60; //Reset value

    // Starts the interval again
    timerInterval = setInterval(updateTimer, 1000);
    timerDisplay.innerHTML = `${startMinutes}:00`;
}

function updateTimer() {
	const minutes = Math.floor(time/60)
	let seconds = time % 60;
	
	seconds = seconds < 10 ? '0' + seconds : seconds;
	
	timerDisplay.innerHTML = `${minutes}:${seconds}`;
	time --;
	
	 if ( time < 0) {

	window.points += 20;  
    clearInterval(timerInterval);	
	localStorage.setItem("points", window.points);
    pointsDisplay.textContent = window.points;	
	if (window.width < 100) {
	window.width += (100/4);
   localStorage.setItem("width", window.width);
}
	resetTimer();
    }
}









