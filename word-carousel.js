const list = [
    "The ghost of Mark Twain?",
    "The ghost of Harry Houdini?",
    "Some other ghost?",
    "No! It's code written by Kevin!"
];

let wordIndex = 0;
let txt = "";
let typewriterTxt = document.querySelector(".typewriter-txt");
let wait = 2000;
let isDeleting = false;

function loopThroughList() {
    const current = wordIndex % list.length;
    const fullTxt = list[current];
    let typeSpeed = 130;

    if (isDeleting) {
        typeSpeed /= 3;
        txt = fullTxt.substring(0, txt.length - 1);
    } else {
        txt = fullTxt.substring(0, txt.length + 1);
    }

    typewriterTxt.innerHTML = txt;

    if (!isDeleting && txt === fullTxt) {
        typeSpeed = wait;
        isDeleting = true;
    } else if (isDeleting && txt === "") {
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => {
        loopThroughList();
    }, typeSpeed);
}

setTimeout(() => {
    loopThroughList();
}, 1500);

// document.addEventListener("DOMContentLoaded", loopThroughList);
