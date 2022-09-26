

export class KeySigniture extends Object {
    constructor(game){
        super(game)
        this.image_flat = document.getElementById("flat");
        this.image_sharp = document.getElementById("sharp")
        
        this.majorOrMinor = null;
        this.trebleOrBass = null;
        // Shift down for rendering Bass
        this.shiftDown = 17
        // Load Selection set at default values
        this.keySelected = "C";
        this.loadSelected = 0
        this.sharp_or_flat = "sharp"
        this.major_or_minor = "Major"

        this.flatXY = [
            [90, 44],
            [110, 17],
            [130, 51],
            [150, 27],
            [170, 61],
            [190, 34],
            [210, 68]
        ]
        this.sharpXY = [
            [90,  20],
            [115, 45],
            [140, 10],
            [165, 37],
            [190, 61],
            [215, 28],
            [240, 54]
        ]
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
        this.majorFlatKeySigniture = {
            "F":  1,
            "Bb": 2,
            "Eb": 3,
            "Ab": 4,
            "Db": 5,
            "Gb": 6,
            "Cb": 7
        }
        this.minorSharpKeySigniture = {
            "A":  0,
            "E":  1,
            "B":  2,
            "F#": 3,
            "C#": 4,
            "G#": 5,
            "D#": 6,
        }
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
        //this.major_or_minor = value;
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