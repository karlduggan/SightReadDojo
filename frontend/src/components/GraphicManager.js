

export class TrebleGraphic extends Object {
    constructor(game){
        super(game)
        this.image = document.getElementById("trebleClef");
    }
    draw(context){
        context.drawImage(this.image, 30, 16)
    }
}

export class BassGraphic extends Object {
    constructor(game){
        super(game)
        this.image = document.getElementById("bassClef");
    }
    draw(context){
        context.drawImage(this.image, 30,41)
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