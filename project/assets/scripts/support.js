function useState(address) {
    let webElement = document.querySelector(address)
    return [
        webElement.innerHTML, 
        function(newValue) {
            webElement.innerHTML = newValue
            return newValue
        }
    ]
}