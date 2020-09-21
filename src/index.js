// console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener("DOMContentLoaded", (evt) => {
    // console.log(evt)
    // evt.preventDefault()
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then((dogObj) => {
            // console.log(dogObj)
            dogObj.message.forEach(image => addImgToDOM(image))
        });

        let addImgToDOM = (dogPicURL) => {
            let container = document.querySelector("#dog-image-container");
            let newImage = document.createElement("img");
            newImage.src = dogPicURL;
            container.appendChild(newImage)
            // console.log(container)
        }

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((dogObj) => {
        breeds = Object.keys(dogObj.message)
        // console.log(breeds)
    })



})