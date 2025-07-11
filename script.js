
let container = document.getElementById("container");
let HiCount = 0;

function SayHI() {
    for (let i = 0; i < 10; i++) {
        container.innerHTML += "<p class=\"hi\">HI</p>";
        HiCount++;
        if (HiCount >= 10) {
            container.innerHTML.split("\n")[1] = "";
        }
    }
}