let colorCode=document.querySelector("#color-code");
let flipColorBtn=document.querySelector("#flip-btn");
let color=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
let body=document.querySelector("body");
flipColorBtn.addEventListener("click",()=>{
    let newColorCode="#";
    for(let i=0;i<6;i++){
        let random=Math.floor(Math.random()*16);
        newColorCode+=color[random];
    }
    colorCode.innerHTML=`${newColorCode}`;
    body.style.backgroundColor=newColorCode;
    colorCode.style.color=newColorCode;
    newColorCode="#";
})