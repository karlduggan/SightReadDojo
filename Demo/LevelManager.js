import { Scoreboard } from './scoreboard.js';
import { KeySigniture } from './signiture.js';
import { InputHandler } from './inputHandler.js';
import { TrebleGraphic, BassGraphic } from './GraphicManager.js';


export class WholeNote extends Object {
    constructor(game, inputHandler, levelSetup){
        super(game)
        this.image = document.getElementById("wholeNote");
        
        this.speed = 1;
        this.setup = null
        this.inputHandler = inputHandler;
        this.x = 900
        this.y = null // this.setup.getY();
        this.noteValue = null //this.setup.getValue();
        
        this.getNextNote = false;
        this.levelSetup = levelSetup;
    }
    change(){
        this.getNextNote = true;
        
    }
    loadSettings(settings){
        this.setup = settings;
        this.y = this.setup.getY();
        this.noteValue = this.setup.getValue();
        this.inputHandler.setNote(this.setup.getValue());
    }
    update(){
        this.x -= this.speed;
        if(this.x <= 80 || this.getNextNote){
            this.x = 900;
            this.setup.nextRandom();
            this.y = this.setup.getY();
            this.noteValue = this.setup.getValue();
            this.inputHandler.setNote(this.setup.getValue());
            this.getNextNote = false;
            console.log(this.noteValue)
        }
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y)
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

class TrebleSetup{
    constructor(game){
        // Y Positions and values on the stave
        this.stave = [
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
        this.trebleGraphic = new TrebleGraphic(game);
        this.naturalNotes = []
        
        this.setup();
    }
    setup(){
        console.log("Treble is loading...")
        let load = this.getNext();
        this.Y = load[0]
        this.Value = load[1]
        this.getNaturalNotesOnSetUp()
    }
    getNext(){
        // Get a random position and value 
        let randomSelect = Math.floor(Math.random() * this.stave.length);
        return this.stave[randomSelect];
    }
    // Updates the stave when key signature changes 
    updateStaveFromKeySignature(keyDict){
        // Important to reset the stave before updating
        this.resetStave()
        for(let i = 0; i < this.stave.length; i++){
            let index = this.stave[i];
            let note = index[1]
            if(note in keyDict){
                this.stave[i][1] = keyDict[note]
            }
        }
        console.log(this.stave)
    }
    getNaturalNotesOnSetUp(){
        for(let i = 0; i < this.stave.length; i++){
            this.naturalNotes.push(this.stave[i][1]);
        }
    }
    resetStave(){
        // Reset using natural notes and assigning back to orgin
        for(let i = 0; i < this.stave.length; i++){
            this.stave[i][1] = this.naturalNotes[i];
        }
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
    draw(context){
        this.trebleGraphic.draw(context);
    }
}

class BassSetup {
    constructor(game){
        // Y Positions and values 
        this.stave = [
            [24, "b"],
            [33, "a"],
            [41, "g"],
            [49, "f"],
            [58, "e"],
            [67, "d"],
            [76, "c"],
            [84, "b"],
            [92, "a"],
            [100, "g"],
            [108, "f"]]
        this.Y = 0;
        this.Value = 0
        this.bassGraphic = new BassGraphic(game);
        this.naturalNotes = []
        this.setup();
    }
    setup(){
        let load = this.getNext();
        this.Y = load[0]
        this.Value = load[1]
        this.getNaturalNotesOnSetUp()
    }
    getNext(){
        // Get a random position and value 
        let randomSelect = Math.floor(Math.random() * this.stave.length);
        return this.stave[randomSelect];
    }
    // Updates the stave when key signature changes 
    updateStaveFromKeySignature(keyDict){
    // Important to reset stave before update 
    this.resetStave()
    for(let i = 0; i < this.stave.length; i++){
        let index = this.stave[i];
        let note = index[1]
        if(note in keyDict){
            this.stave[i][1] = keyDict[note]
        }
    }
        console.log(this.stave)
    }
    getNaturalNotesOnSetUp(){
        for(let i = 0; i < this.stave.length; i++){
            this.naturalNotes.push(this.stave[i][1])
        }
    }
    resetStave(){
        // Reset using natural notes and assigning back to orgin
        for(let i = 0; i < this.stave.length; i++){
            this.stave[i][1] = this.naturalNotes[i];
        }
         
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
    draw(context){
        this.bassGraphic.draw(context);

    }
}

export class LevelSetup {
    // Type is either Treble clef or Base clef setup
    constructor(game){
        this.game = game;
        this.scoreboard = new Scoreboard(this)
        this.levelNumber = null;
        this.loaded = null;
        this.inputHandler = new InputHandler(this)
        this.keySigniture = new KeySigniture(game)
        this.note = new WholeNote(game, this.inputHandler, this);
    }
    loadSetup(value){
        console.log("Level setup loading... " + value)
        if(value == "treble"){
            this.loaded = new TrebleSetup(this.game);
            this.keySigniture.setTreble()
            this.note.loadSettings(this.loaded)
        } else if(value == "bass"){
            this.loaded = new BassSetup(this.game);
            this.note.loadSettings(this.loaded)
            this.keySigniture.setBass()
        }
    }
    update(){
        this.note.update();
    }
    draw(context){
   
        this.note.draw(context);
        this.loaded.draw(context);
        this.keySigniture.draw(context)
    }
    gameOver(){
        this.game.running = false
        console.log("Game Over")
    }
    test(){
        console.log("testing karl")
    }
}