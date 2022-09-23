export class Object {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 50;
        this.x = 0;
        this.y = 0;
    }
    update(){}
    draw(context){
    }
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
}

export class WholeNote extends Object {
    constructor(game){
        super(game)
        this.image = document.getElementById("wholeNote");
        // Temp 
        this.setup = new TrebleClefSetup()
        this.x = 900
        this.y = this.setup.getY();
        this.noteValue = this.setup.getValue();
      
    }
    update(){
        this.x -= 1;
        if(this.x <= 80){
            this.x = 900;
            this.setup.nextRandom();
            this.y = this.setup.getY();
            this.noteValue = this.setup.getValue();
        }
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y)
    }
}

export class TrebleClef extends Object {
    constructor(game){
        super(game)
        this.image = document.getElementById("trebleClef");
    }
    draw(context){
        context.drawImage(this.image, 30, 5)
    }
}

export class Stave extends Object {
    constructor(game){
        super(game)
        this.image = document.getElementById("stave");
    }
    draw(context){
        context.drawImage(this.image, 10, 40)
    }
}

class TrebleClefSetup{
    constructor(){
        // Y Positions and values 
        this.posAndValues = [
            [24, "g"],
            [33, "f"],
            [41, "e"],
            [49, "d"],
            [58, "c"],
            [67, "b"],
            [76, "a"],
            [84, "g"],
            [92, "f"],
            [100, "e"],
            [108, "d"]]
        this.Y = 0;
        this.Value = 0
        this.setup();
    }
    setup(){
        let load = this.getNext();
        this.Y = load[0]
        this.Value = load[1]
    }
    getNext(){
        // Get a random position and value 
        let randomSelect = Math.floor(Math.random() * this.posAndValues.length);
        return this.posAndValues[randomSelect];
    }
    nextRandom(){
        let next = this.getNext();
        this.Y = next[0];
        this.Value = next[1];
    }
    getY(){
        return this.Y;
    }
    getValue(){
        return this.Value;
    }
}