// let buttons = document.querySelectorAll(".accordion-button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         // if (this.classList.contains("active")) {
//         //     this.classList.remove("active")
//         // } else {
//         //     this.classList.add("active")
//         // }

//         document.querySelector(".accordion-button.active").classList.remove("active")
//         this.classList.toggle("active");
//     })
// }

let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right")
var photos = document.querySelectorAll("#slider-wrapper img")

leftButton.addEventListener("click", function() {
    let activePhoto = document.querySelector("img.active")
    activePhoto.classList.remove("active");
    if (activePhoto.previousElementSibling == null) {
        photos[2].classList.add("active")

    } else {
        activePhoto.previousElementSibling.classList.add("active");
    }
})

rightButton.addEventListener("click", function() {
    let activePhoto = document.querySelector("img.active")
    activePhoto.classList.remove("active");
    if (activePhoto.nextElementSibling == null) {
        photos[0].classList.add("active")

    } else {
        activePhoto.nextElementSibling.classList.add("active");
    }
})