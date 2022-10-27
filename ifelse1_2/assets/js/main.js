

function calculate() {
    let theInput = parseInt(document.getElementById("input").value);
    let x = theInput;
    if (x >= 8 && x < 10) {
        console.log("Das Wetter ist super!")
    } else if (x >= 6) {
        console.log("Das Wetter ist gut!")
    } else if (x >= 5) {
        console.log("Das Wetter ist okay!")
    } else if (x >= 2) {
        console.log("Das Wetter ist schlecht!")
    } else if (x >= -1) {
        console.log("Glatteis!")
    }
    console.log(theInput);
}

