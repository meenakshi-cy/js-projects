let form=document.querySelector("form");
let formControl=document.querySelectorAll(".form-control");
let usernameError=document.querySelector("#usernameError");
let emailError=document.querySelector("#emailError");
let passwordError=document.querySelector("#passwordError");
let confirmPasswordError=document.querySelector("#confirmPasswordError");
let confirmRegistration=document.querySelector("#confirmRegistration");
confirmRegistration.style.visibility="hidden";
let nameInput=document.querySelector("#username");
let emailInput=document.querySelector("#email");
let passwordInput=document.querySelector("#password");
let confirmPasswordInput=document.querySelector("#password2");
let emailPattern=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
let usernameScore = false;
let emailScore = false;
let passwordScore = false;
let password2Score = false;
form.addEventListener("input",(e)=>{
    e.preventDefault();
    let name=nameInput.value;
    let email=emailInput.value;
    let password=passwordInput.value;
    let confirmPassword=confirmPasswordInput.value;
    if(e.target.id=="username"){
        if(name.length<3){
            showError(0,"Username must be at least 3 characters",usernameError);
            usernameScore=false;
        }
        else{
            clearError(0,usernameError);
            usernameScore=true;
        }
    }
    else if(e.target.id=="email"){
        if(!emailPattern.test(email)){
            showError(1,"Invalid email address",emailError);
            emailScore=false;
        }
        else{
            clearError(1,emailError);
            emailScore=true;
        }
    }
    else if(e.target.id=="password"){
        if(password.length<6){
            showError(2,"Password must be at least 6 characters",passwordError);
            passwordScore=false;
        }
        else{
            clearError(2,passwordError);
            passwordScore=true;
        }
    }
    else if(e.target.id=="password2"){
        if(password !== confirmPassword){
            showError(3,"Passwords do not match",confirmPasswordError);
            password2Score=false;
        }
        else{
            clearError(3,confirmPasswordError);
            password2Score=true;
        }
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(usernameScore && emailScore && passwordScore && password2Score){
        confirmRegistration.style.visibility="visible";
        confirmRegistration.innerHTML="Congratulation!🎉 Register Succesfully"
        console.log("Congratulation!🎉 Register Succesfully");
        setTimeout(() => {
            nameInput.value='';
            emailInput.value='';
            passwordInput.value='';
            confirmPasswordInput.value='';
        }, 1000);
    }
    else{
        confirmRegistration.style.visibility="visible";
        confirmRegistration.innerHTML="Sorry! Registration failed"
        console.log("Sorry! Registration failed");
        return;
    }
})
function showError(index,message,field) {
    field.style.visibility="visible";
    field.classList.add("error");
    formControl[index].classList.add("error");
    field.innerHTML=message;
}
function clearError(index,field) {
    field.style.visibility="hidden";
    field.classList.remove("error");
    formControl[index].classList.remove("error");
}