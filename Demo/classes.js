export class GameObject {
    constructor( x, y , image_path, canvas){
        this.posX = x;
        this.posY = y;
        this.path = image_path;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    };
    clear(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
        console.log("clear testing")
    };
    draw(){
        console.log("draw testing")
        let img = new Image();
        img.src = this.path;
        img.onload = () => {
        this.context.drawImage(img, this.posX, this.posY);
        }
    };
    update(){
        this.posX -= 10;
        console.log("update testing")
    }
    
}