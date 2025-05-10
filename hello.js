
const addBtn=document.getElementById('add-btn');
const todoInput=document.getElementById('todo-input');

const todoItemsContainer=document.getElementById('item-container');


addBtn.addEventListener('click',()=>{
    const value=todoInput.value;

    const li=document.createElement('li');
    // the <li></li> element is not yet embedded in the div body or anywhere
    li.innerText=value;

    const delButton=document.createElement('button');
    delButton.innerText='X';
    // created a <button></button> in air and added X as its text

    delButton.addEventListener('click',function(){
        li.remove();
        // on clicking X current li tag will be removed 
    })

    li.appendChild(delButton);
    // append the <button></button> inside the li created 

    todoItemsContainer.appendChild(li);

})