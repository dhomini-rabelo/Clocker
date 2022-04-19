import Timer from './timer.js'


const timer = new Timer('.minutes', '.seconds')

document.querySelector('button[type="start"]').addEventListener('click', timer.start)
document.querySelector('button[type="stop"]').addEventListener('click', timer.stop)
document.querySelector('button[type="end"]').addEventListener('click', timer.end)