export class InputHandler {
    constructor(levelSetupInst){
        this.levelSetupInstance = levelSetupInst
        this.note = null;
        this.keys = [];
        this.map = {}
       
        window.addEventListener('keydown', e => {
           // On keydown submit entry to dict
        
            this.map[e.key] = e.type == 'keydown'
            console.log(this.map)
            if(e.key == this.note){
                //alert("Correct")
                //this.noteInstance.change();
                this.levelSetupInstance.note.change();
                this.levelSetupInstance.scoreboard.correctPlusOne();
            } else {
                //alert("Incorrect")
                this.levelSetupInstance.scoreboard.correctPlusOne();
            }
            
        })
        window.addEventListener('keyup', e => {
            // On keyup check entry of dict and then clear
            
            


            // Clear map
            this.map = {}
        })
    }
    
    setNote(noteValue){
        this.note = noteValue;
    }
}