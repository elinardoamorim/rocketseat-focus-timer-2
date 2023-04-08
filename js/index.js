import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sounds from "./sound.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonSetAdd,
  buttonSetDecrease,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSetAdd,
  buttonSetDecrease
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.pauseOrReset
})

const sounds = Sounds()

Events({controls, timer, sounds})









