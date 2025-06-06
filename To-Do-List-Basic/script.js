let todoInput=document.querySelector("#todo-input");
let addTaskBtn= document.querySelector("#add-btn");
let ul=document.querySelector("#todo-list");
let list=[];
addTaskBtn.addEventListener("click",(e)=>{
    let item=todoInput.value.trim();
    if(item===''){
        alert("Please add something to your ToDo list.");
        return;
    }
    else{
        list.push(item);
        todoInput.value='';
        createList();
    }
})
function createList(){
    ul.innerHTML='';
    list.forEach((listItem, index)=>{
        let li=document.createElement("li");
        li.innerHTML=`${listItem} <button class='delete-Btn'>Delete</button>`;
        let delBtn=li.querySelector(".delete-Btn");
        delBtn.addEventListener("click",()=>{
            if(confirm(`Delete this task (${listItem})?`)){
                list.splice(index,1);
                createList();
                return;
            }
            else{
                return;
            }
        })
        ul.appendChild(li);
    })
}