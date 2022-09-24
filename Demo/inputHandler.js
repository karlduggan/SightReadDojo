export class InputHandler {
    constructor(){
        this.noteInstance = null;
        this.note = null;
        this.keys = [];

        window.addEventListener('keydown', e => {
            console.log(e.key);
            
            if(e.key == this.note){
                alert("Correct")
                this.noteInstance.change();
            } else {
                alert("Incorrect")
            }
            
        })
    }
    setNote(noteValue){
        this.note = noteValue;
    }
    setNoteInstance(noteObject){
        this.noteInstance = noteObject;
    }
}