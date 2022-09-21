function line(Y){
    const line = canvas.getContext('2d');
    line.beginPath();      // Start a new path
    line.moveTo(50, Y);    // Move the pen
    line.lineTo(1250, Y);  // Draw a line 
    line.lineWidth = 1;
    line.stroke(); 
}


var startGame = false;
// Key codes for notes
const keycodes = {
	65: "a",
	66: "b",
	67: "c",
	68: "d",
	69: "e",
	70: "f",
	71: "g"
};
// Base clef position and values
const position = [
    [30, "a"],
    [45, "g"],
    [60, "f"],
    [75, "e"],
    [90, "d"],
    [105, "c"],
    [120, "b"],
    [135, "a"],
    [150,"g"]]
function getRandomNotePosition(){
    random = Math.floor(Math.random() * position.length);
    return position[random];
}

// Play Button
var play = document.getElementById("play-btn").addEventListener("click",()=>{
  
});

var canvas = document.getElementById("Canvas");
// Lines


canvas.width = window.screen.width;

var ctx = canvas.getContext("2d");
var x = window.screen.width;
function draw(x, pos){
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, pos, 10, 0, 2 * Math.PI);
    ctx.moveTo(2, 9);
    ctx.fill();
    ctx.stroke();
    
    line(30);
    line(60);
    line(90);
    line(120);
    line(150);
}
var rand = getRandomNotePosition()
var pos = rand[0];
var noteValue = rand[1];

window.requestAnimationFrame(function loop() {
 
    draw(x -= 6, pos)
    if(x <= 0){
        x = window.screen.width;
        rand = getRandomNotePosition()
        pos = rand[0];
        noteValue = rand[1]; 
    }
    console.log(noteValue);
    window.requestAnimationFrame(loop)
})

// Keyboard listener
document.addEventListener('keydown', function(event) {
    var key = event.keyCode;
    var k = keycodes[key];
    if(k == noteValue){
        alert("Correct: " + noteValue);
        
    } else {
        alert("Incorrect: " + k);
    }

})

