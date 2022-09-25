export class InputHandler {
    constructor(levelSetupInst){
        this.levelSetupInstance = levelSetupInst
        this.note = null;
        this.keys = [];

        window.addEventListener('keydown', e => {
            console.log(e.key);
            
            if(e.key == this.note){
                //alert("Correct")
                //this.noteInstance.change();
                this.levelSetupInstance.note.change();
                this.levelSetupInstance.scoreboard.correctPlusOne();
            } else {
                //alert("Incorrect")
                this.levelSetupInstance.scoreboard.incorrectPlusOne();
            }
            
        })
    }
    setNote(noteValue){
        this.note = noteValue;
    }
}