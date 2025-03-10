const textenter = document.getElementById("text-enter");
const listcontainer = document.getElementById("list-container");

function add() {
    if (textenter.value === '') {
        alert("you dont have event");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = textenter.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    textenter.value ="";
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.tagName.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
})