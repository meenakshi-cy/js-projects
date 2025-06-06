let div=document.querySelector(".container");
let height=document.querySelector("#height");
let weight=document.querySelector("#weight");
let bmiResult=document.querySelector("#bmi-result");
let bmiStatus=document.querySelector("#bmi-status");
let bmi;
div.addEventListener("input",(e)=>{
    let userHeight=(height.value)/100;
    let userWeight=weight.value;
    bmi= (userWeight/(userHeight**2)).toFixed(2);
    if(bmi<=0 || bmi=="Infinity"){
        bmiStatus.innerHTML="--";
        bmiResult.innerHTML="--";
        return;
    }
    else if(bmi>0){
        bmiResult.innerHTML=bmi;
        if(bmi < 18.5){
            bmiStatus.innerHTML="Underweight";
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            bmiStatus.innerHTML="Normal";
        }
        else if(bmi >= 25 && bmi < 29.9){
            bmiStatus.innerHTML="Overweight";
        }
        else if(bmi >= 30){
            bmiStatus.innerHTML="Obese";
        }
        else{
            bmiStatus.innerHTML="--";
        }
    }
})