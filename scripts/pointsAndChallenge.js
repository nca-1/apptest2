//MAIN CHALLENGE FORM, ADDING POINTS, STREAKS//

window.points = parseInt(localStorage.getItem("points")) || 0;
window.streakNumber = parseInt(localStorage.getItem("streakNumber")) || 0;

//DATE AND TIME
function getCurrentDate() {
       let date = new Date();
      return date.toISOString().split('T')[0]; // YYYY-MM-DD
        }
		
///////POP UPS//////
function openChallenge() {//open challenge
  document.getElementById("form").style.display = "flex";
}

function closeChallenge() { //close challenge
document.getElementById("form").style.display = "none";
}

function openLVL(){//levels and stat pop-up
	 document.getElementById("revealLVL").style.display = "flex";
}

function closeLVL(){
	 document.getElementById("revealLVL").style.display = "none";
}

function openLose(){//lost draw
	 document.getElementById("losePopup").style.display = "flex";
}

function closeLose(){
	 document.getElementById("losePopup").style.display = "none";
}

function openWin(){//win draw
	 document.getElementById("winPopup").style.display = "flex";	
	
}

function closeWin(){
	 document.getElementById("winPopup").style.display = "none";
}

function openPromo(){//promo info
	 document.getElementById("promoPopup").style.display = "flex";
}

function closePromo(){
	 document.getElementById("promoPopup").style.display = "none";
}

function savePointsToLocalStorage() {
  localStorage.setItem("points", window.points);
  localStorage.setItem("streakNumber", window.streakNumber);
  document.getElementById("points").textContent = window.points;
}

window.weekStreak = parseInt(localStorage.getItem('weekStreak')) || 0; //WEEKS AND LEVEL WORK
window.weekLevel = parseInt(localStorage.getItem('weekLevel')) || 0;
function findLevel() { //Tell level based on streaks completed
	window.weekLevel++;
	window.points += 100;
	localStorage.setItem('points', window.points)
	document.getElementById("points").textContent = window.points;	
	
	localStorage.setItem('weekLevel', window.weekLevel); 
	document.getElementById("LVL").textContent = window.weekLevel;	
	document.getElementById("congratsLVL").textContent = `Level ${window.weekLevel}`;
openLVL();	
}

function saveMilestones() {
      const milestones = document.querySelectorAll('.milestone, .weekMilestone');
  const milestoneData = [];

  milestones.forEach(milestone => {
    const textElement = milestone.querySelector('.milestoneText');

    milestoneData.push({
      type: milestone.className,
      text: textElement ? textElement.textContent : ""
    });
  });

  localStorage.setItem('milestones', JSON.stringify(milestoneData));
    }

    // Function to load the milestones from localStorage
    function loadMilestones() {
      const storedMilestones = JSON.parse(localStorage.getItem('milestones')) || [];
      const map = document.getElementById('map');

      // Recreate each stored milestone
      storedMilestones.forEach(milestoneData => {
        const newMilestone = document.createElement('div');
        newMilestone.className = milestoneData.type;
		const milestoneText = document.createElement("p");
		milestoneText.className = "milestoneText";
		milestoneText.textContent = milestoneData.text;
	
        map.appendChild(newMilestone);
		newMilestone.appendChild(milestoneText);
		map.scrollLeft = map.scrollWidth;
      });
    }

function addLockMilestone() { // Two will show up at a time to indicate later levels 
for (let i = 0; i < 2; i++) {
 const lockMilestone = document.createElement("div"); // Create locked level
lockMilestone.setAttribute("onclick","alert('Unlock this level by completing the daily challenge.');");
  lockMilestone.className = "lockMilestone";
  const map = document.getElementById("map");
  map.appendChild(lockMilestone);
}

}
function addMilestone() { // Adds milestones to map
document.querySelectorAll(".lockMilestone").forEach(el => el.remove());
if (window.weekStreak % 7 === 0 && window.weekStreak !== 0){ //If it's a week
	
  const newMilestone = document.createElement("div");
newMilestone.className = "weekMilestone";

const milestoneText = document.createElement("p");
milestoneText.innerHTML = weekStreak;
milestoneText.className = "milestoneText";
newMilestone.appendChild(milestoneText);
  const map = document.getElementById("map");	
  // Append the actual DOM element, not a string
  map.appendChild(newMilestone);
  window.weekStreak = 1;
  findLevel();
}
else { //Normal day
	const newMilestone = document.createElement("div");
  newMilestone.className = "milestone";
  
  const milestoneText = document.createElement("p");
milestoneText.innerHTML = window.weekStreak;  
milestoneText.className = "milestoneText";
newMilestone.appendChild(milestoneText);

  const map = document.getElementById("map");	
  // Append the actual DOM element, not a string
  map.appendChild(newMilestone);
  window.weekStreak += 1; 
}
addLockMilestone(); // Re-show locks
saveMilestones();
localStorage.setItem('weekStreak', window.weekStreak); 

}

//PROGRESS BAR
window.width = parseInt(localStorage.getItem("width")) || 0;
 const progBar = document.getElementById("progBar");
window.addProgress = function() {
if (window.width < 100) {
	window.width += (100/4);
  progBar.style.width = window.width  + "%";
   localStorage.setItem("width", window.width);
}
else {
	progBar.style.width = "0%";
	window.width = 0;
	  localStorage.setItem("width", window.width);
}
}

// POINTS
function addPoints()  {
  let lastChangeDate = localStorage.getItem("lastChangeDate"); 
  let currentDate = getCurrentDate();
  
  // Check if points can be added (only once per day)
  if (lastChangeDate !== currentDate) {
    // Calculate points based on sleep quality and sleep hours
    let sleepQuality = parseInt(document.getElementById("sleepQuality").value) * 10 || 0;
    let sleepHours = parseInt(document.getElementById("sleepHours").value) * 10 || 0;
	addProgress(); //Add to bar
  if (sleepHours > 240){
 alert("Please provide a valid time in hours"); 
return; 
  }   
   else{  
   if (sleepHours > 120 || sleepHours < 1) {
	   window.points += sleepQuality + Math.round((sleepHours*0.3)); //Over-sleeping is not good either. Less points added also because possible forgery.
     window.streakNumber += 1;
	 addMilestone();
	        document.getElementById("points").textContent = window.points;
     document.getElementById("streakNumber").textContent = window.streakNumber;
   localStorage.setItem("lastChangeDate", new Date().toISOString());
    savePointsToLocalStorage();
   }
   
   else{
     window.points += sleepQuality + sleepHours; 
     window.streakNumber += 1;
	 addMilestone();

     document.getElementById("points").textContent = window.points;
     document.getElementById("streakNumber").textContent = window.streakNumber;
    localStorage.setItem("lastChangeDate", currentDate);
    savePointsToLocalStorage();
	
   }
   }
   } else {
     alert("You can only update once a day!");
   }
    
}


// NUMBER GUESSING GAME//
//gets user input
const numberInput = document.getElementById("numberInput");

//shows user input
const numberDisplay =  document.getElementById("numberDisplay");
function showInput() {

numberDisplay.textContent = numberInput.value;
  
}

numberInput.addEventListener("input", showInput); //Updates when range is changed

function chooseNumber() { 
let chooseNumber = Math.floor(Math.random()* 30)+1;
let userGuess = parseInt(numberInput.value);
  document.getElementById("selectedNumber").textContent = chooseNumber;
if( userGuess === chooseNumber){
 document.getElementById("winLose").textContent = "You win!";
    window.points += 2;// Add 2 points for winning
	savePointsToLocalStorage();
	addProgress();
  } else {
    document.getElementById("winLose").textContent = "You lose!";
  }
  
  // Update points display
  document.getElementById("points").textContent = window.points;
}

////OTHER/////


//SPENDING POINTS

function _0x4569(_0x5c23b8,_0x3b40f7){const _0x47a532=_0x47a5();return _0x4569=function(_0x456972,_0x40a069){_0x456972=_0x456972-0x1e2;let _0x44dcef=_0x47a532[_0x456972];return _0x44dcef;},_0x4569(_0x5c23b8,_0x3b40f7);}function _0x47a5(){const _0x1697c1=['594952ooNqzY','348yvTnbj','4400MWcTRT','238308oApwZA','236qkunRz','ogPoints','points','738kjKvWf','329160mRYgIO','479160MqLLxD','cardIdBox','1000584Snnpky','random','9fQBtAi','innerHTML','weekLevel'];_0x47a5=function(){return _0x1697c1;};return _0x47a5();}(function(_0x3809bd,_0x20116d){const _0xce5182=_0x4569,_0x550e15=_0x3809bd();while(!![]){try{const _0x18dd95=parseInt(_0xce5182(0x1e8))/0x1*(parseInt(_0xce5182(0x1e5))/0x2)+-parseInt(_0xce5182(0x1ea))/0x3+parseInt(_0xce5182(0x1ec))/0x4+-parseInt(_0xce5182(0x1e3))/0x5*(parseInt(_0xce5182(0x1e2))/0x6)+parseInt(_0xce5182(0x1e4))/0x7+-parseInt(_0xce5182(0x1f1))/0x8*(-parseInt(_0xce5182(0x1ee))/0x9)+parseInt(_0xce5182(0x1e9))/0xa;if(_0x18dd95===_0x20116d)break;else _0x550e15['push'](_0x550e15['shift']());}catch(_0x3a689d){_0x550e15['push'](_0x550e15['shift']());}}}(_0x47a5,0x41617));function pickDraw(){const _0x472854=_0x4569,_0x1b861a=Math[_0x472854(0x1ed)]()<0.045;_0x1b861a?(window[_0x472854(0x1e6)]=window[_0x472854(0x1e7)],document['getElementById'](_0x472854(0x1eb))[_0x472854(0x1ef)]=new Date()+'\x20'+window[_0x472854(0x1e7)]+'-'+window[_0x472854(0x1f0)]+'-'+window[_0x472854(0x1e6)],openWin()):openLose();}

function spendPoints() {
	if (window.points === 0) {
		alert('...with what coins?');
		return;
	}
	if (window.points >= 350) { //TO BE MODIFIED
	window.ogPoints = window.points;
	window.points -= 350;
	document.getElementById("points").textContent = window.points;
	pickDraw();
	savePointsToLocalStorage();
	}
	else {
		alert("You don't have enough coins for that.");
	}
}



/////
function clearMilestonesFromPage() {
  const map = document.getElementById('map');
  const milestones = map.querySelectorAll('.milestone, .weekMilestone');


  milestones.forEach(m => map.removeChild(m));
  saveMilestones();
	window.weekStreak = 1;
		localStorage.setItem('weekStreak', window.weekStreak); 
	
	window.weekLevel = 0;
		localStorage.setItem('weekLevel', window.weekLevel); 
	document.getElementById("LVL").textContent = window.weekLevel;
} 

function dayReset() { //RESET DAY
    let lastChangeDate = new Date(localStorage.getItem("lastChangeDate"));
    let currentDate = new Date(); 

    if (!lastChangeDate || isNaN(lastChangeDate)) return; 

    const diffMilliseconds = currentDate - lastChangeDate;
    const diffHours = diffMilliseconds / (1000 * 60 * 60); // ms → hours

    if (diffHours > 24) {
        // More than 24 hours passed
        window.streakNumber = 0;
        localStorage.setItem('streakNumber', window.streakNumber);
        document.getElementById("streakNumber").textContent = window.streakNumber;

        window.weekStreak = 1;
        localStorage.setItem('weekStreak', window.weekStreak);

        window.width = 0;
        localStorage.setItem('width', window.width);
        document.getElementById("progBar").style.width = "0%";
    }
}


window.onload = function() {
dayReset();
document.getElementById("points").textContent = window.points;
document.getElementById("streakNumber").textContent = window.streakNumber;
document.getElementById("LVL").textContent = window.weekLevel; 
progBar.style.width = window.width + "%";//PROGRESS BAR UPDATE
loadMilestones();
addLockMilestone();

};