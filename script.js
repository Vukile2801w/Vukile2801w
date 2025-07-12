
const birthday = new Date(2010, 5, 24);


let age = document.getElementById("Age");
let date = new Date();

window.onload = function () {
    let ageNum = date.getFullYear() - birthday.getFullYear();
    
    // Provera da li je rođendan već prošao ove godine
    const m = date.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && date.getDate() < birthday.getDate())) {
        ageNum--;
    }

    age.innerHTML = ageNum;
}
