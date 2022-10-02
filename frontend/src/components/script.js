
export default class Tester{
    static test(){
        console.log("printing from a class worked ")
    }
}

/*
import { Stave, LevelSetup } from './LevelManager.js';

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
     key_signiture_selection.addEventListener('change',(e)=>{
        var key = key_signiture_selection.value;
        game.levelSetup.keySigniture.setKey(key)

        var value = major_minor_selection.value;
        game.levelSetup.keySigniture.setMajorOrMinor(value)
        

     })
     
     major_minor_selection.addEventListener('change',(e)=>{
        var key = key_signiture_selection.value;
        game.levelSetup.keySigniture.setKey(key)

        var value = major_minor_selection.value;
        game.levelSetup.keySigniture.setMajorOrMinor(value)
        console.log(value)

     })
   
    
    
    

})








*/