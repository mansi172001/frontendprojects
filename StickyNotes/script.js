const nodesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// function showNotes(){
//     nodesContainer.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

// function updateStorage(){
//     localStorage.setItem("notes", nodesContainer.innerHTML);
// }

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/del-icon.png";
    nodesContainer.appendChild(inputBox).appendChild(img);   

})

nodesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
// document.addEventListener("keydown", event =>{
//     if(event.key === "Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })
