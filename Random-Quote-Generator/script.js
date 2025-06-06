let quote=document.querySelector("#quote");
let author=document.querySelector("#author");
let generateBtn=document.querySelector("#generate-btn");
let quotes=[{"quote":"Be yourself; everyone else is already taken.","author":"― Oscar Wilde"},{"quote":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","author":"― Albert Einstein"},{"quote":"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","author":"― Bernard M. Baruch"},{"quote":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.","author":"― Dr. Seuss"},{"quote":"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'","author":"― C.S. Lewis, The Four Loves"}];
let randomNum, previousNumber;
generateBtn.addEventListener("click",()=>{
    generateNumber();
})
function generateNumber(){
    randomNum=Math.floor(Math.random()*quotes.length);
    if(previousNumber==randomNum){
        generateNumber()
        return;
    }
    else{
        quote.innerHTML=quotes[randomNum]["quote"];
        author.innerHTML=quotes[randomNum]["author"];
    }
    previousNumber=randomNum;
}