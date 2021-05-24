const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML; //added innerHTML
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer").innerHTML; //added innerHTML

//console.log(testWrapper);
//console.log(testArea);
//console.log(originText);
//console.log(resetButton);
//console.log(theTimer);

//converts origin text to String array
const originTextinparts = originText.split("");

// Event listeners for keyboard input and the reset button:
//Keyup event listens to keyboard press , found this on Keyboard event page of mdn
//Executes changecolor function and timer)

document.getElementById("test-area").addEventListener("keyup", () => {
  changecolor(), start();
});

//Function to change color
function changecolor() {
  //e.preventDefault();
  var textentered = document.getElementById("test-area").value;

  //Converts text entered to array
  var textenteredinparts = textentered.split("");

  //console.log(textenteredinparts);
  if (textenteredinparts.length == 0) {
    testWrapper.style.border = "10px solid grey";
  }

  //For loop to run till the end of the test
  for (let i = 0; i < textentered.length; i++) {
    // Match the text entered with the provided text on the page:
    if (originTextinparts[i] == textenteredinparts[i]) {
      //Intermediate stage - the test till here is correct but not completed the test
      testWrapper.style.border = "10px solid skyblue";

      if (i == originTextinparts.length - 1) {
        //To check if end of string is reached so we compare with original string
        testWrapper.style.border = "10px solid green";
        //to stop the function
        clearInterval(runfunction);
      }
    } else {
      testWrapper.style.border = "10px solid red";

      //console.log("errors"+counter); //still testing this need to remove backspace from error
      break;
    }
  }
}

//Remembered a java project that showed you can run a function each second, so I used this logic to increment the seconds

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var finalmilliseconds;
var finalseconds;
var finalminutes;

// Run a standard minute/second/hundredths timer:
var runfunction;
//runfunction = setInterval(stopwatch,10);
var counter = 0;

function start() {
  //This counter is used to call the timer function only once , that is only on the first typed letter
  //If we do not do this, the timer will increment on every key press.
  counter++;
  if (counter == 1) {
    runfunction = setInterval(stopwatch, 10); // will run the function once every 10 miliseconds since 1000 milliseconds = 1 second
  }
}
// Start the timer:
function stopwatch() {
  milliseconds++;
  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
  } else if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  // Add leading zero to numbers 9 or below (purely for aesthetics):

  if (milliseconds < 10) {
    finalmilliseconds = "0" + milliseconds;
  } else {
    finalmilliseconds = milliseconds;
  }

  if (finalseconds < 10) {
    finalseconds = "0" + seconds;
  } else {
    finalseconds = seconds;
  }

  if (minutes < 10) {
    finalminutes = "0" + minutes;
  } else {
    finalminutes = minutes;
  }

  document.querySelector(".timer").innerHTML =
    finalminutes + ":" + finalseconds + ":" + finalmilliseconds;
  console.log(minutes, seconds, milliseconds);
}

// Reset everything:
function resetfunction() {
  clearInterval(runfunction);
  milliseconds = 0;
  finalmilliseconds = 0;
  seconds = 0;
  finalseconds = 0;
  minutes = 0;
  finalminutes = 0;

  document.getElementById("test-area").value = "";
  counter = 0;

  document.querySelector(".timer").innerHTML = "00:00:00";
  testWrapper.style.border = "10px solid grey";

  console.log(milliseconds);
  console.log(finalmilliseconds);
  console.log(seconds);
  console.log(finalseconds);
  console.log(minutes);
  console.log(finalminutes);
}
