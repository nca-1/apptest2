window.onload = function() {
window.points = parseInt(localStorage.getItem("points")) || 0;
const pointsDisplay = document.getElementById("points");
pointsDisplay.textContent = window.points;

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









