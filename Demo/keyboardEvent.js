
// Key codes for notes
const keycodes = {
	65: "a",
	66: "b",
	67: "c",
	68: "d",
	69: "e",
	70: "f",
	71: "g"
};

// Keyboard listener
document.addEventListener('keydown', function(event) {
    var key = event.keyCode;
    var k = keycodes[key];
    if(k == noteValue){
        alert("Correct: " + noteValue);

    } else {
        alert("Incorrect: " + k);
    }

})