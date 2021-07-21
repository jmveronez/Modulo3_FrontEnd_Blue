/*3. Na sua página HTML há dois input elements do tipo number e um botão. Você deve ser capaz de
adicionar um número inteiro em cada um dos inputs e ao clicar no botão, um elemento p deve
aparecer dizendo qual dos dois números é o maior.*/

const N1 = document.getElementById("numero1")
const N2 = document.getElementById("numero2")
const botao = document.getElementById("botao")
let display = document.getElementById("display-screen")

botao.addEventListener("click", () => {
    if (N1.value > N2.value){
        display.value += `O número ${N1.value} é maior`
    } else if (N2.value > N1.value) {
        display.value += `O número ${N2.value} é maior`
    }
})