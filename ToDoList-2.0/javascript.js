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

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textenter.value = "";
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)
/* klavyeden click vb şeyler ekleme
document.addEventListener("keydown",function(event){
    if (event.key=="Enter"){
        document.getElementById("buttona verdiğiniz değişken adı").click();
    }
}) 
içinin boş olup olmadığını kontrol etme ve şart
document.querySelector("değişkenadı").onclick=function(){
    if(document.querySelector("input name").value.length==0){
        alert("Boş Giremezsiniz");
    }
}

*/
/* listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false) */

