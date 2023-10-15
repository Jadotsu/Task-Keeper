const inputText = document.getElementById("input-text");
document.getElementById("input-button").addEventListener("click",SetName, false);
inputText.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        SetName();
    }
},false);

const backgroundColor = ["#3E2476","#FC0F00"];
function ColorUpdate(){
    let colorHover = $("#container");
    colorHover.css("--colorA",backgroundColor[0]);
    colorHover.css("--colorB",backgroundColor[1]);
}
function SetName(){
    if (inputText.value != '') {
        localStorage.setItem("UserName",inputText.value);
        $("#newContainer").css("opacity",0);
        ColorUpdate();
        sleep(360).then(() => {window.location = "./index.html"; });
    }
}
$("#container").css("opacity",1);
$("#container").css("transition","--colorA 240ms ease, --colorB 240ms ease");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}