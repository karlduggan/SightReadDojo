


function create_treble_clef(){
    let image = new Image();
    image.src = "assets/trebleClef.png";
    image.onload = function(){
        context.drawImage(image, 0, 0);
      }
      console.log("testing")
}
console.log("testing")