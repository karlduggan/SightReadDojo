export class InputHandler {
    constructor(levelSetupInst){
        this.levelSetupInstance = levelSetupInst
        this.note = null;
        this.pressed = null
        this.keys = [];
        this.map = {}
       
        window.addEventListener('keydown', e => {
           // On keydown submit entry to dict
            this.map[e.key] = e.type == 'keydown'            
        })
        
        window.addEventListener('keyup', e => {
            let OnePress = true;
            // On keyup check entry of dict and then clear
            if("ArrowUp" in this.map){
                let keysPressed = Object.keys(this.map);
                let value = keysPressed.filter((e)=>{return e !== 'ArrowUp' })
                this.pressed = value + "+"

            }
            if("ArrowDown" in this.map){
                let keysPressed = Object.keys(this.map);
                let value = keysPressed.filter((e)=>{return e !== 'ArrowDown' })
                this.pressed = value + "-"


            }
            if(Object.keys(this.map).length == 1){
                let keysPressed = Object.keys(this.map);
                this.pressed = keysPressed[0]

            }
            
            // Check if correct
            if(this.pressed == this.note){
                console.log(this.pressed)
                console.log(this.note)
                //alert("Correct")
                //this.noteInstance.change();
                this.levelSetupInstance.note.change();
                this.levelSetupInstance.scoreboard.correctPlusOne();
            } else {
                //alert("Incorrect")
                this.levelSetupInstance.scoreboard.incorrectPlusOne();
            }
                
            
            console.log("Pressed: " + this.pressed)

            // Clear map
            this.map = {}
        })
        
    }
    
    setNote(noteValue){
        this.note = noteValue;
    }
}