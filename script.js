// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
//var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; //default pattern
var pattern = [0];
var patternLength = 8; // set length of new random pattern
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2;
var guessCounter = 0;
var strikes = 0;
var intervalTimer = 0;
var time = 20;
var clueSequenceOn = false;
var clueHoldTime = 1000; //how long to hold each clue's light/sound (var so we can change it)
function startGame() {
  //initialize game variables
  progress = 0;
  strikes = 0;
  clueHoldTime = 1000;
  time = 20;
  gamePlaying = true;
  //toggles start and stop buttons visibility
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  document.getElementById("levels").classList.remove("hidden");
  document.getElementById("lives").classList.remove("hidden");
  document.getElementById("lives").innerHTML = "Lives: 3";
  document.getElementById("levels").innerHTML = "Level: 1";
  secretPattern();
  playClueSequence();
}
function secretPattern() {
  for(var i = 0; i < patternLength; i++) {
    pattern[i] = (Math.floor(Math.random() * 6) + 1); // generates number 1 - 6
  }
   console.log(pattern);
}
function stopGame() {
  time = 20;
  clearInterval(intervalTimer);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  document.getElementById("levels").classList.add("hidden");
  document.getElementById("lives").classList.add("hidden");
  document.getElementById("lives").innerHTML = "Lives: 3";
  document.getElementById("levels").innerHTML = "Level: 1";
}
function loseGame() {
  clearInterval(intervalTimer);
  document.getElementById("gameOver").play(); //play game over sound
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  document.getElementById("gameWon").play(); //play game win sound
  stopGame();
  alert("Game Over. You won!");
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  document.getElementById("button"+btn).style.border = "2px solid silver";
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  document.getElementById("button"+btn).style.border = "2px solid grey";
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  time = 20;
  document.getElementById("timer").innerHTML = "Time: " + time;
  clueHoldTime -= (60-progress); // reduce clue time each sequnce
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  toggleSequenceClick(delay); // prevents player from clicking buttons while sequence is playing
  setTimeout(startTimer,delay - 1000); //starts timer after clue sequence finsihes
  
}
function toggleSequenceClick(d) { 
  clueSequenceOn = true;
   setTimeout(function() { clueSequenceOn = false; }, d);
}
function startTimer() {
  clearInterval(intervalTimer);
  intervalTimer = setInterval(function(){
      time--;
      document.getElementById("timer").innerHTML = "Time: " + time; 
      console.log(time);
      if (time == 0) { //when time runs out, player looses game
        time = 20;
        loseGame();
    }
  }, 1000 // every second
);
}
function showImage(btn) { //implemants fruits and a silver border to the buttons
  if(!clueSequenceOn) { // prevent clicking while sequence in on
   document.getElementById("button"+btn).classList.remove('hiddenImage');
   document.getElementById("button"+btn).style.border = "2px solid silver";
  }
}
function hideImage(btn) {//removes fruits and a silver border to the buttons
   document.getElementById("button"+btn).classList.add('hiddenImage');
   document.getElementById("button"+btn).style.border = "2px solid grey";
}
function guess(btn){
  if(!clueSequenceOn) {
  console.log("user guessed: " + btn);
  console.log("guessedCounter " + guessCounter);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(btn != pattern[guessCounter]) { //if player guesses incorrectly
    clearInterval(intervalTimer); // stops timer
    strikes++ // incrimint stikes if player guesses incorrectly
    document.getElementById("lives").innerHTML = "Lives: " + (3 - strikes); //update lives ui
     if(strikes == 3) { //if player guesses incorrectly 3 times then loose game
      loseGame(); 
    }
    else {
    playClueSequence();
    console.log("stikes: " + strikes);
    }
  }
  if (btn == pattern[guessCounter]) { // if player guesses correctly
    console.log("prog: " + progress + " guess: " + guessCounter);
    if(guessCounter <= progress) { // next guess
      guessCounter++;
    }
    if(guessCounter > progress) { // finish guessing current patern
        clearInterval(intervalTimer); // stops timer
        document.getElementById("levels").innerHTML = "Level: " + (progress + 2);
        progress++;
        console.log("correct");
        playClueSequence();
    }
    if(progress == pattern.length) { // player wins when guessing full patern
      winGame(); 
    }
  }
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 567,
  6: 711
}
function playClick(btn) { //custom click sound
  if(!clueSequenceOn) { //only when clue sequence isnt playing
      if(btn == pattern[guessCounter]) {
        document.getElementById("clickAudio").play();
      }
      else {
        document.getElementById("wrongClickAudio").play();
      }
     }
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)