let counter=document.querySelector("#counter");
let buttons=document.querySelector(".buttons");
let number= 0;
buttons.addEventListener("click",(e)=>{
    if(e.target.id === "increment"){
        number++;
        counter.innerHTML=`${String(number).padStart(2,"0")}`;
    }
    else if(e.target.id === "decrement"){
        if(number <= 0){
            return;
        }
        else{
            number--;
            if(number==0){
                counter.innerHTML=`${number}`;
            }
            else{
                counter.innerHTML=`${String(number).padStart(2,"0")}`;
            }
        }
    }
    else{
        number=0;
        counter.innerHTML=`${number}`;
    }
})