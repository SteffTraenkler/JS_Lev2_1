let changer = document.getElementById("navChange");
let home = document.getElementById("navHome");

function ChangeMe() {
    console.log("test");
    document.getElementById("navHome").innerHTML = "emoH";
    home.style.backgroundColor = "pink";
    home.style.fontSize = "larger";
}