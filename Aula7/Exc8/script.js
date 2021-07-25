let celsius = document.getElementById("celsius")
let faren = document.getElementById("faren")
const elementoBotao = document.querySelectorAll("button")

elementoBotao.addEventListener("submit", function(){
    faren.innerHTML ` <p>Fº: ${(celsius * 9/5) + 32}</p>`
    console.log((celsius * 9/5) + 32)
})
