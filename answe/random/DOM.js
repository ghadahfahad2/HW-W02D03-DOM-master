
const button = document.querySelector("#randomize");
let newImag = document.createElement("img");
button.addEventListener('click', function () {
newImag.setAttribute('src',"https://source.unsplash.com/1600x900")
document.body.appendChild(newImag)
});
