window.addEventListener("load", changeColor);

let red = '0';
let green = '0';
let blue = '0';

function changeColor(){
    let outputElement = document.querySelector('#box');
    let redInput = document.querySelector('#red_range');
    let greenInput = document.querySelector('#green_range');
    let blueInput = document.querySelector('#blue_range');

    redInput.addEventListener("input", function () {
        red = event.target.value;
        outputElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.getElementById('red_text').setAttribute("value",red);
    })
    greenInput.addEventListener("input", function () {
        green = event.target.value;
        outputElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.getElementById('green_text').setAttribute("value",green);
    })
    blueInput.addEventListener("input", function () {
        blue = event.target.value;
        outputElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.getElementById('blue_text').setAttribute("value",blue);
    })
    
}
