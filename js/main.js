let myparagraf = document.querySelector('p');


document.querySelector("#dodaj").onclick = function dodaj() {
myparagraf.textContent = 'to jest paragraf';}
document.querySelector("#usuń").onclick = function usuń() {
        myparagraf.textContent = null;
}

