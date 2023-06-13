let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function CelToFarKel(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    let output1 = (parseFloat(celsius.value)+273.15); 
    fahrenheit.value = parseFloat(output.toFixed(2));
    kelvin.value = parseFloat(output1.toFixed(2));
}

function FarToCelKel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    let output1 = (parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15; 
    celsius.value = parseFloat( output.toFixed(2));
    kelvin.value = parseFloat( output1.toFixed(2));
    console.log(output);
}

function KelToCelFar(){
    let output = ( parseFloat(kelvin.value) - 273.15);
    let output1 = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32; 
    celsius.value = parseFloat( output.toFixed(2));
    fahrenheit.value = parseFloat( output1.toFixed(2));
    console.log(output);
}