let slider=document.querySelector(".slider");
let slideContainer=document.querySelector(".slider-container");
let i=0;
let direction;
let totalImages=slider.children;
let btns=document.querySelector(".buttons");
btns.addEventListener("click",(e)=>{
    if(e.target.id == "next"){
        direction=1;
        changeSlide();
    }
    else if(e.target.id == "prev"){
        direction=0;
        changeSlide();
    }
    
})
function changeSlide(){
    totalImages[i].classList.remove("active");
    if(direction){
       i = (i+1)%totalImages.length;
    }
    else{
        i = (i-1+totalImages.length)%totalImages.length;
    }
    totalImages[i].classList.add("active");
}
let mycarousel= setInterval(() => {
    slideShow();
}, 3000);

slideContainer.addEventListener("mouseout",()=>{
    clearInterval(mycarousel);
    mycarousel= setInterval(() => {
        slideShow();
    }, 3000);
});
slideContainer.addEventListener("mouseover",()=>{
    clearInterval(mycarousel);
});
function slideShow(){
    totalImages[i].classList.remove("active");
    i++;
    if(i>=totalImages.length){
        i=0;
        totalImages[i].classList.add("active");
    }
    else{
        totalImages[i].classList.add("active");
    }
}
