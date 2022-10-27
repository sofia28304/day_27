

function calculate() {
    console.log("hallo")
    let anzeige1 = document.getElementById("erstes");
    let anzeige2 = document.getElementById("zweites");

    let age1 = parseInt(document.getElementById("age1").value);
    let age2 = parseInt(document.getElementById("age2").value);
    let size1 = parseInt(document.getElementById("size1").value);
    let size2 = parseInt(document.getElementById("size2").value);


    let multiplizieren1 = age1 * 5;
    let multiplizieren2 = age2 * 5;

    let addieren1 = multiplizieren1 + size1;
    let addieren2 = multiplizieren2 + size2;
    console.log(addieren1);
    console.log(addieren2);
    anzeige1.innerHTML = addieren1;
    anzeige2.innerHTML = addieren2;
}


// let ageJohn = 22;
// let sizeJohn = 170;
// let ageMeike = 34;
// let sizeMeike = 168;

// function calculate(age, size) {
//     let multiplizieren = age * 5;
//     let ergebnis = multiplizieren + size;
//     console.log(ergebnis);
// }

// calculate(ageJohn, sizeJohn);
// calculate(ageMeike, sizeMeike);