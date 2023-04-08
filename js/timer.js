export function Timer({minutesDisplay, secondsDisplay, resetControls}) {
  let minutes = Number(minutesDisplay.textContent)
  let timerOutId

  function countDown() {
    timerOutId = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if(isFinished) {
        resetControls()
        updateDisplay()
        return
      }
  
      if(seconds <= 0){
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, seconds - 1)
      
      countDown()
  
      }, 1000) 
  }
  
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
  }
  
  function timerRemoveMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    
    if(newMinutes < 0){
      minutesDisplay.textContent = String(0).padStart(2, "0")
      return
    }

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  }

  function hold() {
    clearTimeout(timerOutId)
  }

  function addMinutes() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
  }

  return {
    countDown,
    updateDisplay,
    reset,
    timerRemoveMinutes,
    addMinutes,
    hold
  }
}

