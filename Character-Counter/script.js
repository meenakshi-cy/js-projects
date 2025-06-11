let textArea=document.querySelector("#input-text");
let charCount=document.querySelector("#char-count");
textArea.addEventListener("input",(e)=>{
    let textVal=textArea.value;
    let totalLen=textVal.length;  
    let sliced;  
    if(totalLen<=100){
        warning(totalLen);
    }
    else{
        sliced=textVal.slice(0,100);
        textArea.value=sliced;        
        warning(sliced.length);
        return;
    }
})
function warning(totalLen){
    if(totalLen>=95){
        charCount.classList.add("warning");
        charCount.innerHTML=`${totalLen} / 100 characters`;
    }
    else{
        charCount.classList.remove("warning");
        charCount.innerHTML=`${totalLen} / 100 characters`;
    }    
}