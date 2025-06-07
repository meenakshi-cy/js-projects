let tempInput=document.querySelector("#temp-input");
let temperature;
let celsiusResult=document.querySelector("#celsius-result");
let fahrenheitResult=document.querySelector("#fahrenheit-result");
let kelvinResult=document.querySelector("#kelvin-result");
let unit=document.querySelector("#unit");
let unitSelection=unit.value;
unit.addEventListener("change",()=>{
    unitSelection=unit.value;
    if(isNaN(temperature) || temperature==''){
        return;
    }
    else{
        checkUnit(temperature);
    }
})
tempInput.addEventListener("input",()=>{
    temperature=parseFloat(tempInput.value);    
    checkUnit(temperature);    
})
function checkUnit(temperature){
    if(unitSelection=="celsius"){
        celsiusTo(temperature);
    }
    else if(unitSelection=="fahrenheit"){
        fahrenheitTo(temperature);
    }
    else if(unitSelection=="kelvin"){
        kelvinTo(temperature);
    }
}
function celsiusTo(temperature) {
    let celsiusToFahrenheit = ((temperature * 9/5) + 32).toFixed(2);
    let celsiusToKelvin = (temperature + 273.15).toFixed(2);
    celsiusResult.innerHTML=`${temperature}°C`;
    fahrenheitResult.innerHTML=`${celsiusToFahrenheit}°F`;
    kelvinResult.innerHTML=`${celsiusToKelvin}K`;
}
function fahrenheitTo(temperature) {
    let FahrenheitToKelvin = ((temperature - 32) * 5/9 + 273.15).toFixed(2);
    let FahrenheitToCelsius = ((temperature - 32) * 5/9).toFixed(2);
    celsiusResult.innerHTML=`${FahrenheitToCelsius}°C`;
    fahrenheitResult.innerHTML=`${temperature}°F`;
    kelvinResult.innerHTML=`${FahrenheitToKelvin}K`;
}
function kelvinTo(temperature) {
    let kelvinToFahrenheit = ((temperature - 273.15) * 9/5 + 32).toFixed(2);
    let kelvinToCelsius = (temperature - 273.15).toFixed(2);
    celsiusResult.innerHTML=`${kelvinToCelsius}°C`;
    fahrenheitResult.innerHTML=`${kelvinToFahrenheit}°F`;
    kelvinResult.innerHTML=`${temperature}K`;
}