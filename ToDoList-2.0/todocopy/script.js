
function ekle() {
    //Tanımlama
    var tpu = document.getElementById("Tpu").value;
    var Lu = document.getElementById("Parrent");
    var CopyLi = document.getElementById("CopyLi");
    var CopyBtn = document.getElementById("Del");

    if (tpu == "") {
        alert("Lüften Boş Liste Eklemeyiniz");
    }
    else {  //Yaratma
        var btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.setAttribute("id", "Del")
        btn.setAttribute("onclick", "dele()")
        var Cli = document.createElement("li");
        Cli.setAttribute("id", "CopyLi");
        Cli.innerHTML = tpu;
        Cli.appendChild(btn);
        Lu.appendChild(Cli);
        document.getElementById("Tpu").value = "";
    }


}



function dele() {
    var CopyBtn = document.getElementById("Del").parentElement;
    console.log(CopyBtn);
    CopyBtn.remove();
}
