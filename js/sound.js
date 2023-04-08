export default function () {
  const songForest = new Audio("../sounds/forest.wav")
  const songRain = new Audio("../sounds/rain.wav")
  const songCoffeeShop = new Audio("../sounds/coffeeshop.wav")
  const songFirePlace = new Audio("../sounds/fireplace.wav")

  return {
    songForest,
    songRain,
    songCoffeeShop,
    songFirePlace
  }
}