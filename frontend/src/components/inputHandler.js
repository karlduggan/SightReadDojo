export class InputHandler {
    constructor(levelSetupInst){
        this.levelSetupInstance = levelSetupInst
        this.note = null;
        this.pressed = null

        // Added and capture key strokes
        this.capture = []
        this.doubleKeyUp = true;
       
        window.addEventListener('keydown', e => {
            // Prevent double key up entry so reset on keydown
            this.doubleKeyUp = false
           
            // Capture all keys pressed and push to array 
            // check that the array is reach max capcity of 2
            // Check that key is not already in the array 
            let key = e.key 
            const max = 2;
            if(!this.capture.includes(key) && this.capture.length < max){
                this.capture.push(key)   
            }
        })
        
        window.addEventListener('keyup', () => {
            // Clean captured keys
            if(this.capture.length > 1){
                if(this.capture.includes("ArrowUp")){
                    this.capture = this.capture.filter(function(e) { return e !== 'ArrowUp' })
                    
                    let value = this.capture[0]
                    this.pressed = value + "+"
                
                }
                if(this.capture.includes("ArrowDown")){
                    this.capture = this.capture.filter(function(e) { return e !== 'ArrowDown' })
                    let value = this.capture[0]
                    this.pressed = value + "-"
                }
            } else {
                this.pressed = this.capture[0]
            }
            // Clear capture
            this.capture = []

            // Prevent double key up event 
            if(!this.doubleKeyUp){
                // Check if correct
                if(this.pressed == this.note){
                    
                    //alert("Correct")
                    //this.noteInstance.change();
                    this.levelSetupInstance.note.change();
                    this.levelSetupInstance.scoreboard.correctPlusOne();
                } else {
                    //alert("Incorrect")
                    this.levelSetupInstance.scoreboard.incorrectPlusOne();
                }
                // First keyup know
                this.doubleKeyUp = true
                console.log("Pressed: " + this.pressed)
            }
        })
        
    }
    
    setNote(noteValue){
        this.note = noteValue;
    }
}