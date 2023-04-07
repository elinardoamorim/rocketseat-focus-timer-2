import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetAdd,
  buttonSetDecrease,
  cardPressed
} from "./elements.js"

export default function ({controls, timer}) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
  })
  
  buttonPause.addEventListener('click', function() {
    controls.pauseOrReset()
    timer.hold()
  })
  
  buttonStop.addEventListener('click', () => {
    controls.pauseOrReset()
    timer.reset()
    timer.hold()
  })
  
  buttonSetAdd.addEventListener('click', () => {
    timer.addMinutes()
  })
  
  buttonSetDecrease.addEventListener('click', () => {
    timer.timerRemoveMinutes()
  })
}