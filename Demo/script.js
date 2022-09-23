import {GameObject} from './classes.js';
import {InputHandler} from './inputHandler.js';
import { WholeNote, TrebleClef, Stave } from './player.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById("CanvasLayout");
    const ctx = canvas.getContext('2d'); 
    canvas.width = 955
    canvas.height = 150

    class Game {
        constructor(height, width){
            this.height = height;
            this.width = width;

            // Add objects below
            this.stave = new Stave(this);
            this.wholeNote = new WholeNote(this);
            this.trebleClef = new TrebleClef(this);
        }
        update(){
            this.wholeNote.update();
        
        }
        draw(context){
            this.stave.draw(context)
            this.wholeNote.draw(context);
            this.trebleClef.draw(context);
        }
    }
    const game = new Game();

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate)
    }
    animate();

})



new InputHandler()




