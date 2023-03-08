let label=document.getElementById("label");
let food =document.querySelector("body");
label.addEventListener("click",()=>{
    food.classList.toggle("active")
})

let form =document.getElementById("language");
let body =document.querySelector("body");
language.addEventListener("click",()=>{
body.classList.toggle("activer");
})