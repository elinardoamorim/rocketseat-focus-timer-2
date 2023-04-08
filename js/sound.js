export default function () {
  const songForest = new Audio("https://github.com/elinardoamorim/rocketseat-focus-timer-2/blob/master/sounds/forest.wav?raw=true")
  const songRain = new Audio("https://github.com/elinardoamorim/rocketseat-focus-timer-2/blob/master/sounds/rain.wav?raw=true")
  const songCoffeeShop = new Audio("https://github.com/elinardoamorim/rocketseat-focus-timer-2/blob/master/sounds/coffeeshop.wav?raw=true")
  const songFirePlace = new Audio("https://github.com/elinardoamorim/rocketseat-focus-timer-2/blob/master/sounds/fireplace.wav?raw=true")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  return {
    songForest,
    songRain,
    songCoffeeShop,
    songFirePlace,
    buttonPressAudio,
    kitchenTimer
  }
}