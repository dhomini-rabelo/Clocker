import { useState } from './support.js'


class Timer {

    constructor (minutesAddress, secondsAddress){
        let [minutes, setMinutes] = useState(minutesAddress)
        let [seconds, setSeconds] = useState(secondsAddress)
        this.minutes = minutes
        this.setMinutes = setMinutes
        this.seconds = seconds
        this.setSeconds = setSeconds
        this.isActive = false
    }

    start = () => {
        if (!(this.isActive)){
            this.interval = setInterval(this.updateTimer, 1000)
            this.isActive = true
        }
    }

    stop = () => {
        if (this.isActive){
            clearInterval(this.interval)
            this.isActive = false
        }
    }

    end = () => {
        this.stop()
        this.seconds = this.setSeconds('00')
        this.minutes = this.setMinutes('00')
    }

    updateTimer = () => {
        let currentSeconds = Number(this.seconds)
        let currentMinutes = Number(this.minutes)

        if(currentSeconds < 59) {
            this.updateSeconds(currentSeconds)
        } else if(currentSeconds === 59) {
            this.updateMinutes(currentMinutes)
        }
    }

    updateSeconds = (currentSeconds) => {
        this.seconds = this.setSeconds(this.adaptTimeNumber(currentSeconds + 1))
    }

    updateMinutes = (currentMinutes) => {
        this.minutes = this.setMinutes(this.adaptTimeNumber(currentMinutes + 1))
        this.seconds = this.setSeconds('00')
    }

    adaptTimeNumber = (timeNumber) => timeNumber < 10 ? `0${timeNumber}` : timeNumber
}


export default Timer