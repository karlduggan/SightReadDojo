

export class KeySigniture extends Object {
    constructor(game){
        super(game)
        this.image_flat = document.getElementById("flat");
        this.image_sharp = document.getElementById("sharp")
        this.x = 90
        this.spacing = 5;

        this.flatXY = [
            [90, 17],
            [110, 17],
            [130, 17],
            [150, 17],
            [170, 17],
            [170, 17]
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
    update(){}

    test(context){
        for(let index of this.flatXY){
            console.log(index)
            context.drawImage(this.image_flat, index[0] , index[1])
            
        }
        this.x = 90
    }

    draw(context){
       // Testing loop
        
        console.log("draw")
        this.test(context)
        //context.drawImage(this.image_flat, this.x, 17)
           
        
       
        
    }
}