import "../scss/eye.scss";
import { inherits } from "util";


let wrapper = document.body.querySelector('.eye-wrapper');

let audioDiv = document.body.querySelector('#audio')

function init() {
    getButton()
}

wrapper.addEventListener('mouseleave', () => {
    // playAudio()
})

function playAudio() {
    audioDiv.play()
}

function getButton() {
    let audioButton = document.body.querySelector('.music-button');
    let audio1 = document.body.querySelector('#audio-bg1')

    audioButton.addEventListener("click", () => {
        return audio1.paused ? audio1.play() : audio1.pause();
    })
}

// window.onbeforeunload = function (e) {
//     e = e || window.event;

//     // For IE and Firefox prior to version 4
//     if (e) {
//         e.returnValue = 'Any string';
//     }

//     // For Safari
//     return 'Any string';
// };

window.addEventListener("load", init)
