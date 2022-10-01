<template>
    <body>
    <div class="wrapper">
        <div id="scoreboard-container">
            <h3 class="scoreboard-block" id="scoreboard-level">Difficulty: 1</h3>
            <h3 class="scoreboard-block" id="scoreboard-correct">Correct: 0</h3>
            <h3 class="scoreboard-block" id="scoreboard-incorrect">Incorrect: 0</h3>
        </div>
    </div>
   
    <!--canvas id="CanvasLayout" style="border: 1px solid black;"></canvas-->
    <div class="canvas-container">
        <canvas id="CanvasLayout"></canvas>
    </div>
    

    <label for="key-signiture">Select Key Signiture: </label>
    <select name="key-signiture" id="key-signiture">
      
            <option value="C">C</option>
            <option value="G">G</option>
            <option value="D">D</option>
            <option value="A">A</option>
            <option value="E">E</option>
            <option value="B">B</option>
            <option value="F#">F#</option>
            <option value="Gb">Gb</option>
            <option value="Cb">Cb</option>
            <option value="Db">Db</option>
            <option value="Ab">Ab</option>
            <option value="Eb">Eb</option>
            <option value="Bb">Bb</option>
            <option value="F">F</option>
            <option value="C#">C#</option>
            <option value="G#">G#</option>
            <option value="D#">D#</option>

    </select>
    <select name="key-signiture-major-minor" id="key-signiture-major-minor">
        <option value="Major">Major</option>
        <option value="Minor">Minor</option>
      
    </select>

    <br>
    <button id="treble-btn">Treble Clef</button>
    <button id="base-btn">Base Clef</button>
    <br>
    <button id="play">Play</button>
    
    <img id="trebleClef" src="../assets/trebleClef.png">
    <img id="bassClef" src="../assets/baseClef.png">
    <img id="wholeNote" src="../assets/wholeNote.png">
    <img id="stave" src="../assets/stave.png">
    <img id="sharp" src="../assets/sharp.png">
    <img id="flat" src="../assets/flat.png">

</body>

</template>

<script>
import { Stave, LevelSetup } from './LevelManager.js';

export default {
        name: "CanvasDisplay"
    }

window.addEventListener('load', function(){
    const canvas = document.getElementById("CanvasLayout");
    const ctx = canvas.getContext('2d'); 
    canvas.width = 955
    canvas.height = 150

    class Game {
        constructor(height, width){
            this.height = height;
            this.width = width;
            this.running = false;
            // Add objects below
            this.stave = new Stave(this);
            this.levelSetup = new LevelSetup(this)
            this.levelSetup.loadSetup("treble");
        }
        update(){
            // Stop and start the game
            if(this.running){
            this.levelSetup.update();
            }
        }
        draw(context){
            this.stave.draw(context)
            this.levelSetup.draw(context);
        }
    }
    const game = new Game();
    // Game Loop
    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate)
    }
    //requestAnimationFrame(animate)
     animate(1);    
    const treble_btn = document.getElementById("treble-btn");
    treble_btn.addEventListener('click',()=>{
        game.levelSetup.loadSetup("treble");
    })
     const base_btn = document.getElementById("base-btn");
    base_btn.addEventListener('click', ()=>{
        game.levelSetup.loadSetup("bass");
    })
     const play_btn = document.getElementById("play");
     play_btn.addEventListener('click', ()=>{
        game.levelSetup.scoreboard.reset()
        game.running = true;
     })
     const key_signiture_selection = document.getElementById("key-signiture")
     const major_minor_selection = document.getElementById("key-signiture-major-minor")
     key_signiture_selection.addEventListener('change',()=>{
        var key = key_signiture_selection.value;
        game.levelSetup.keySigniture.setKey(key)

        var value = major_minor_selection.value;
        game.levelSetup.keySigniture.setMajorOrMinor(value)
        

     })
     
     major_minor_selection.addEventListener('change',()=>{
        var key = key_signiture_selection.value;
        game.levelSetup.keySigniture.setKey(key)

        var value = major_minor_selection.value;
        game.levelSetup.keySigniture.setMajorOrMinor(value)
        console.log(value)

     })
})

</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
    }
#scoreboard-container {

    display: flex;
    justify-content: space-between;
    width: 400px;
}
.scoreboard-block {
    display: block;
}

#wholeNote {
    display: none;
}
#bassClef {
    display: none;
}
#trebleClef{
    display: none;
}
#stave {
    display: none;
}
#sharp {
    display: none;
}
#flat {
    display: none;
}

</style>