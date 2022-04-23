export function useState(address) {
    let webElement = document.querySelector(address)

    class State {

        updateValue = (newValue) => {
            webElement.innerHTML = newValue
        }
        
        toString = () => webElement.innerHTML
    }

    const state = new State()

    return [
        state, 
        state.updateValue,
    ]
}