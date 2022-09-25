
import {InputHandler} from './inputHandler.js';
import { Stave, LevelSetup} from './player.js';

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
            this.levelSetup.loadSetup("base");
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
    let lastTime = 1;
   
    function animate(timeStamp){
        // Calculate the number of seconds passed since the last frame
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        
        //console.log(timeStamp)
        ctx.clearRect(0,0,canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate)
    }

     animate(1);
        
     const treble_btn = document.getElementById("treble-btn");
    treble_btn.addEventListener('click',()=>{
        game.levelSetup.loadSetup("treble");
    })
     const base_btn = document.getElementById("base-btn");
    base_btn.addEventListener('click', ()=>{
        game.levelSetup.loadSetup("base");
    })
     const play_btn = document.getElementById("play");
     play_btn.addEventListener('click', ()=>{
        game.levelSetup.scoreboard.reset()
        game.running = true;
     })

   
    
    
    

})








