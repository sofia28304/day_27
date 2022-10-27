let inhalt = document.getElementById("inhalt");
let result = document.getElementById("output");
let regler = document.getElementById("slidecontainer");
let dropDown = document.getElementById("fonts");

console.log(result);
console.log(result.innerHTML)
function changeFont() {

    result.innerHTML = inhalt.value
    // in dem p-tag soll der inhalt vom input feld stehen
    result.style.fontSize = regler.value + "px";
    console.log(regler.value);
    result.style.fontFamily = dropDown.value;
}