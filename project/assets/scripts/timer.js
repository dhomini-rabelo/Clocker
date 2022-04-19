import { useState } from './support.js'

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

document.querySelector('button[type="start"]').addEventListener('click', startTimer)

function startTimer() {
    updateSeconds(seconds.value)
}

function updateSeconds(currentSeconds) {

}

function renderBlock(type) {

}