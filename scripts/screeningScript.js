window.points = parseInt(localStorage.getItem("points")) || 0;
const pointsDisplay = document.getElementById("points");
pointsDisplay.textContent = window.points;

window.streakNumber = parseInt(localStorage.getItem("streakNumber")) || 0;
const streakDisplay = document.getElementById("streakNumber");
streakDisplay.textContent = window.streakNumber;

let stopTurn = false;
var advice1Points = 0;
var advice2Points = 0;
var advice3Points = 0;
var advice4Points = 0;

function advice1() {
advice1Points += 1;
}

function advice2() {
	advice2Points += 1;
}

function advice3() {
	advice3Points += 1;
}

function advice4() {
	advice4Points += 1;
}

 function totalPoints() {
      var maxPoints = Math.max(advice1Points, advice2Points, advice3Points, advice4Points);
      var feedbackText = "";

      // Determine which advice has the most points
      if (maxPoints === advice1Points) {
        feedbackText = "Perhap's life is getting stressful...but it's okay you can get through it! Allocating specfic times for rest and work may help with your issues. If that's not possible, atleast make sure to avoid working on your bed, so that when you do get the chance to rest, that part of your room is not already associated with stress. While doing tasks, move around a bit to loosen up. Set routines and, truly, ask for help if you need it!";
      } else if (maxPoints === advice2Points) {
        feedbackText = "It's evident that you're struggling to get enough rest. Try your best to sleep and wake at the same time each day, or to allocate naps throughout the day if necessary. Make sure to avoid caffeine later in the day as well. If concerns persist, reach out to a health provider that can help you.";
      } else if (maxPoints === advice3Points) {
        feedbackText = "It's possible that your routine before bed is preventing you from being able to get the rest you need. Try to avoid screens, meditate, journal, or whatever else soothes you mind. If this is a consistent issue however, it might be time to start logging symptoms for future reference. (Insomnia? Get it checked first beefore assuming!)";
      } else if (maxPoints === advice4Points) {
        feedbackText = "Maybe try changing your sleep position and staying hydrated throughout the day. However, if snoring and gasping sound a lot like you, it might be time to check with a health provider about sleep apnea.";
      }
	 if (stopTurn === true){
	 setTimeout(() => {
    window.points ++; 
	localStorage.setItem("points", window.points);
    pointsDisplay.textContent = window.points;
    stopTurn = false;	
    }, 300000);
	document.getElementById('feedback').textContent = feedbackText;
	 }
	 else {
      // Update points + Feedback!!
	window.points ++; 
    document.getElementById('feedback').textContent = feedbackText;
	localStorage.setItem("points", window.points);
    pointsDisplay.textContent = window.points;
	stopTurn = true;
	if (window.width < 100) {
	window.width += (100/4);
   localStorage.setItem("width", window.width);
}	
	}
    }
	function redo() {
	var advice1Points = 0; //Reset
	var advice2Points = 0;
	var advice3Points = 0;
	var advice4Points = 0;
	 document.getElementById('feedback').textContent = "Tip goes here!"
	}
