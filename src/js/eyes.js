import "../scss/eye.scss";

let wrapper = document.body.querySelector('.eye-wrapper');
let musicWrapper = document.body.querySelector('.music-button');

let stay = document.body.querySelector('#audio__stay');
let stayaway = document.body.querySelector('#audio__stayaway')
let comeback = document.body.querySelector('#audio__comeback')
let begin = document.body.querySelector('#audio__begin')
let leave = document.body.querySelector('#audio__leave')

function init() {
    getButton()
}

wrapper.addEventListener('mouseleave', () => {
    leave.play()
})

musicWrapper.addEventListener('mouseover', () => {
    stayaway.play()
})

// window.addEventListener('mouseover', () => {
//     // begin.play()
// })

function getButton() {
    let audioButton = document.body.querySelector('.music-button');
    let audio1 = document.body.querySelector('#audio-bg1')
    let audio2 = document.body.querySelector('#audio-bg2')
    let audio3 = document.body.querySelector('#audio-bg3')
    let p = document.body.querySelector('.music-button__text')

    audioButton.addEventListener("click", (e) => {
        let target = e.target
        if(target.classList.contains('music-button__image1')) {
            p.innerHTML = 'Now playing: I follow you'
            audio1.volume = 0.3
            console.log(audio1.volume)
            return audio1.paused ? audio1.play() : audio1.pause();
        } else if(target.classList.contains('music-button__image2')) {
            p.innerHTML = 'Now playing: Crazy Eyes'
            audio2.volume = 0.3
            return audio2.paused ? audio2.play() : audio2.pause();
        } else {
            p.innerHTML = 'Now playing: Eyes on you'
            audio3.volume = 0.3
            return audio3.paused ? audio3.play() : audio3.pause();
        }
        
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

let modal = document.body.querySelector('.modal')
let closeButton = document.body.querySelector('.concept__button')

closeButton.addEventListener('click', () => {
    modal.style.display = "none"
})

window.addEventListener("load", init)
