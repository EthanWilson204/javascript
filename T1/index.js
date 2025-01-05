//gives us the elements of the body tag in the html document 
//need [0] to be specified to grab the whole tag
const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})` //tilda button. Formatted string
    body.style.backgroundColor = color
}
