import {GameObject} from './classes.js';
import {InputHandler} from './inputHandler.js';


window.addEventListener('load', function(){
    const canvas = document.getElementById("CanvasLayout");
    const ctx = canvas.getContext('2d'); 
    //canvas.width = 0
    //canvas.height = 0

    class Game {
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
        update(){}
        draw(contex){}
    }
    const game = new Game()

})



new InputHandler()
//import create_treble_clef from './items';
// Main Canvas


let trebleClef = new GameObject(60,20, "assets/trebleClef.png", canvas)
let baseClef = new GameObject(60,35, "assets/baseClef.png", canvas);
let wholeNote = new GameObject(canvas.width, 65, "assets/wholeNote.png",canvas)
//trebleClef.draw();
baseClef.draw();
wholeNote.draw();



function line(Y){
    const line = canvas.getContext('2d');
    line.beginPath();      // Start a new path
    line.moveTo(50, Y);    // Move the pen
    line.lineTo(1250, Y);  // Draw a line 
    line.lineWidth = 1;
    line.stroke(); 
}


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
    let random = Math.floor(Math.random() * position.length);
    return position[random];
}

// Lines
canvas.width = window.screen.width;

var ctx = canvas.getContext("2d");
var x = window.screen.width;

function clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function noteDraw(x, pos){
    
    ctx.beginPath();
    ctx.arc(x, pos, 10, 0, 2 * Math.PI);
    ctx.moveTo(2, 9);
    ctx.fill();
    ctx.stroke();
    
}

var rand = getRandomNotePosition()
var pos = rand[0];
var noteValue = rand[1];


function graphicUpdate(){
  
    // Lines
    line(30);
    line(60);
    line(90);
    line(120);
    line(150);
    // NoteDraw

    // Clear
}
// Game Loop

graphicUpdate()

function draw(){
    clear();
    baseClef.draw();
    wholeNote.draw();
    noteDraw(x -= 2, pos)
}

////////////////


window.requestAnimationFrame(function loop() {
   

   
    draw();
    
    if(x <= 0){
        x = window.screen.width;
        rand = getRandomNotePosition()
        pos = rand[0];
        noteValue = rand[1]; 
        
    }
    
    window.requestAnimationFrame(loop)
})




