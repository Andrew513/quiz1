function change() {
    $(document).ready(function(){
        $("#quiz1").text("CSIE@CGU")
        $("#quiz1_1").text("怎麼那麼棒！！")
    });
    // var header = document.getElementById("quiz1");
    // header.innerHTML = "CSIE@CGU";
    // var para = document.getElementById("quiz1_1");
    // para.innerHTML = "怎麼那麼棒！！";
    }
function myFunction() {
    var btn = document.createElement("BUTTON");  
    btn.innerHTML = "Change this document";
    document.body.appendChild(btn).addEventListener("click", change);
    }