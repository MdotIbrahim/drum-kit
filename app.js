const boomAudio = new Audio("sounds/boom.wav");
const clapAudio = new Audio("sounds/clap-808.wav");
const hithatAudio = new Audio("sounds/hihat-acoustic02.wav");
const kickAudio = new Audio("sounds/kick-zapper.wav");
const openhatAudio = new Audio("sounds/openhat-acoustic01.wav");
const rideAudio = new Audio("sounds/ride-acoustic01.wav");
const snareAudio = new Audio("sounds/snare-block.wav");
const tinkAudio = new Audio("sounds/tink.wav");
const tomAudio = new Audio("sounds/tom-acoustic01.wav");

// const buttons = document.querySelectorAll("button");
const boomButton = document.getElementById("boom");
const clapButton = document.getElementById("clap");
const hithatButton = document.getElementById("hithat");
const kickButton = document.getElementById("kick");
const openhatButton = document.getElementById("openhat");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tinkButton = document.getElementById("tink");
const tomButton = document.getElementById("tom");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         boomAudio.play();
//         });
// });

boomButton.addEventListener("click", () => {
    boomAudio.play();
})
clapButton.addEventListener("click", () => {
    clapAudio.play();
})
hithatButton.addEventListener("click", () => {
    hithatAudio.play();
})
kickButton.addEventListener("click", () => {
    kickAudio.play();
})
openhatButton.addEventListener("click", () => {
    openhatAudio.play();
})
rideButton.addEventListener("click", () => {
    rideAudio.play();
})
snareButton.addEventListener("click", () => {
    snareAudio.play();
})
tinkButton.addEventListener("click", () => {
    tinkAudio.play();
})
tomButton.addEventListener("click", () => {
    tomAudio.play();
})

document.addEventListener("keypress", (event) => {
    if (event.key == "a") {
        boomAudio.play();
    }else if (event.key == "s"){
        clapAudio.play();
    }else if (event.key == "d"){
        hithatAudio.play();
    }else if (event.key == "f"){
        kickAudio.play();
    }else if (event.key == "g"){
        openhatAudio.play();
    }else if (event.key == "h"){
        rideAudio.play();
    }else if (event.key == "j"){
        snareAudio.play();
    }else if (event.key == "k"){
        tinkAudio.play();
    }else if (event.key == "l"){
        tomAudio.play();
    }
})