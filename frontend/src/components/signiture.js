

export class KeySigniture extends Object {
    constructor(game){
        super(game)
        this.image_flat = document.getElementById("flat");
        this.image_sharp = document.getElementById("sharp")
        this.game = game;
        this.majorOrMinor = null;
        this.trebleOrBass = null;
        // Shift down for rendering Bass
        this.shiftDown = 17
        // Load Selection set at default values
        this.keySelected = "C";
        this.loadSelected = 0
        this.sharp_or_flat = "sharp"
        this.major_or_minor = "Major"

        this.sharpArray = ["f","c","g","d","a","e","b"]
        this.flatArray = ["b","e","a","d","g","c","f"]
    
        // X Y graphic positions for flats
        this.flatXY = [
            [90, 44],
            [110, 17],
            [130, 51],
            [150, 27],
            [170, 61],
            [190, 34],
            [210, 68]
        ]
        // X Y graphic position for sharps
        this.sharpXY = [
            [90,  20],
            [115, 45],
            [140, 10],
            [165, 37],
            [190, 61],
            [215, 28],
            [240, 54]
        ]
        // Number of sharp keys in major
        this.majorSharpKeySigniture = {
            "C":  0,
            "G":  1,
            "D":  2,
            "A":  3,
            "E":  4,
            "B":  5,
            "F#": 6,
            "C#": 7
        }
        // Number of flat keys in major
        this.majorFlatKeySigniture = {
            "F":  1,
            "Bb": 2,
            "Eb": 3,
            "Ab": 4,
            "Db": 5,
            "Gb": 6,
            "Cb": 7
        }
        // Number of sharp keys in minor
        this.minorSharpKeySigniture = {
            "A":  0,
            "E":  1,
            "B":  2,
            "F#": 3,
            "C#": 4,
            "G#": 5,
            "D#": 6,
        }
        // Number of flats keys in minor 
        this.minorFlatKeySigniture = {
            "D":  1,
            "G":  2,
            "C":  3, 
            "F":  4,
            "Bb": 5,
            "Eb": 6,
        }
    }
    setTreble(){
        this.shiftDown = 0;
    }
    setBass(){
        this.shiftDown = 17;
    }
    setKey(key){
        this.keySelected = key;
    }
    setMajorOrMinor(value){
        // Update with new value
        this.major_or_minor = value;

        // Load the Graphics
        if(value == "Minor"){
            if(this.keySelected in this.minorSharpKeySigniture){
                this.loadSelected = this.minorSharpKeySigniture[this.keySelected]
                this.sharp_or_flat = "sharp";
            } else {
                this.loadSelected = this.minorFlatKeySigniture[this.keySelected]
                this.sharp_or_flat = "flat";
            }
            console.log("Selected Minor")
        }
        if(value == "Major"){
            if(this.keySelected in this.majorSharpKeySigniture){
                this.loadSelected = this.majorSharpKeySigniture[this.keySelected]
                this.sharp_or_flat = "sharp";
            }else {
                this.loadSelected = this.majorFlatKeySigniture[this.keySelected]
                this.sharp_or_flat = "flat";
            }
            console.log("Selected Major")
        
        }
        
        let keyDictSig = this.getKeySigniture()
        this.game.levelSetup.loaded.updateStaveFromKeySignature(keyDictSig)
    }
    // Returns a dictionay of key and its updated value 
    // Example a = a flat or {"a":"a-"}
    getKeySigniture(){
        let notesToUpdate = {}
        let quickSelect = {
            "Major": {
                "sharp": this.majorSharpKeySigniture, 
                "flat": this.majorFlatKeySigniture},
            "Minor": {
                "sharp": this.minorSharpKeySigniture, 
                "flat": this.minorFlatKeySigniture},
        }
        let quickSelectArray = {
            "sharp": this.sharpArray,
            "flat": this.flatArray
        }
        let numberOfNotes = quickSelect[this.major_or_minor][this.sharp_or_flat][this.keySelected]
        let noteArray = quickSelectArray[this.sharp_or_flat] 
        for(let i = 0; i < numberOfNotes; i++){
            if(this.sharp_or_flat == "sharp"){
                let note = noteArray[i]
                notesToUpdate[note] = note + "+";
            }
            if(this.sharp_or_flat == "flat"){
                let note = noteArray[i]
                notesToUpdate[note] = note + "-";
            }
        }
        return notesToUpdate
        // console.log(notesToUpdate)
        
    }
  

    update(){}
    drawSharps(context){
        for(var i = 0; i < this.loadSelected; i++){
            let index = this.sharpXY[i];
            context.drawImage(this.image_sharp, index[0] , index[1] + this.shiftDown)
        }
    }
    drawFlats(context){
        for(var i = 0; i < this.loadSelected; i++){
            let index = this.flatXY[i];
            context.drawImage(this.image_flat, index[0] , index[1] + this.shiftDown)
        }
        this.x = 90
    }

    draw(context){
        if(this.sharp_or_flat == "sharp"){
            this.drawSharps(context) 
        }else {
            this.drawFlats(context)
        }
        
    }
    
}