const paper1 = document.querySelector("p1");
const paper2 = document.querySelector("p2");

const prevBtn = document.querySelector("#prev-button");
const nextBtn = document.querySelector("next-page");
const album = document.querySelector("album");

//Business Logic
let currentLocation = 1;
let numberOfPapers = 2;
let maxLocation = numberOfPapers + 1;

function open() {
    album.style.transform  = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180)";
    nextBtn.style.transform = "translateX(180)";

}
function close() {
    album.style.transform  = "translateX(0%)";
    prevBtn.style.transform = "translateX(0)";
    nextBtn.style.transform = "translateX(0)";


}
function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: 
            open();
            paper1.classList.add("flipped");
            break;
            case 2:
                paper2.classList.add("flipped");
                break;
            default: 
                throw new Error();
        }
        currentLocation++;
    }

}
function goPreviousPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2: 
            close();
            paper2.classList.remove("flipped");
            paper2.style.zIndex = 1;
            break;
            default: 
                throw new Error();
        }
        currentLocation++;
    }

}