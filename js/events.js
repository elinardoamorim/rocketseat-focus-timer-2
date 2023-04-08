import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetAdd,
  buttonSetDecrease,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace
} from "./elements.js"

export default function ({controls, timer, sounds}) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sounds.buttonPressAudio.play()
  })
  
  buttonPause.addEventListener('click', function() {
    controls.pauseOrReset()
    timer.hold()
    sounds.buttonPressAudio.play()
  })
  
  buttonStop.addEventListener('click', () => {
    controls.pauseOrReset()
    timer.reset()
    timer.hold()
    sounds.buttonPressAudio.play()
  })
  
  buttonSetAdd.addEventListener('click', () => {
    timer.addMinutes()
    sounds.buttonPressAudio.play()
  })
  
  buttonSetDecrease.addEventListener('click', () => {
    timer.timerRemoveMinutes()
    sounds.buttonPressAudio.play()
  })

  cardForest.addEventListener('click', () => {
    cardRain.checked = false
    cardCoffeeShop.checked = false
    cardFireplace.checked = false

    sounds.songRain.pause()
    sounds.songCoffeeShop.pause()
    sounds.songFirePlace.pause()

    if(cardForest.checked == true){
      sounds.songForest.play()
      sounds.songForest.loop = true
    } else {
      sounds.songForest.pause()
    }
  })

  cardRain.addEventListener('click', () => {
    cardForest.checked = false
    cardCoffeeShop.checked = false
    cardFireplace.checked = false

    sounds.songForest.pause()
    sounds.songCoffeeShop.pause()
    sounds.songFirePlace.pause()

    if(cardRain.checked == true) {
      sounds.songRain.play()
      sounds.songRain.loop = true
    } else {
      sounds.songRain.pause()
    }
  })
  
  cardCoffeeShop.addEventListener('click', () => {
    cardForest.checked = false
    cardRain.checked = false
    cardFireplace.checked = false

    sounds.songForest.pause()
    sounds.songRain.pause()
    sounds.songFirePlace.pause()

    if(cardCoffeeShop.checked == true) {
      sounds.songCoffeeShop.play()
      sounds.songCoffeeShop.loop = true
    } else {
      sounds.songCoffeeShop.pause()
    }

  })

  cardFireplace.addEventListener('click', () => {
    cardForest.checked = false
    cardRain.checked = false
    cardCoffeeShop.checked = false

    sounds.songForest.pause()
    sounds.songRain.pause()
    sounds.songCoffeeShop.pause()

    if(cardFireplace.checked == true) {
      sounds.songFirePlace.play()
      sounds.songFirePlace.loop = true
    } else {
      sounds.songFirePlace.pause()
    }
  })
  
}