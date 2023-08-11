const icon = document.getElementById("check");
const body = document.querySelector("body");
icon.onchange = function () {
    console.log(body,'body')
    body.classList.toggle("body-dark")
   
}