console.log("test")

// siehe hierfür das YT tutorial https://www.youtube.com/watch?v=DP9-CVgkgDA 

function changeColor() {
    let color = document.getElementById("Farbe").value;
    document.body.style.backgroundColor = color;

}

// 2. Variante
function changeColor2() {
    let color = document.getElementById("inputColor").value;
    document.body.style.backgroundColor = color;
    document.getElementById("Farbe2").value = color;

}