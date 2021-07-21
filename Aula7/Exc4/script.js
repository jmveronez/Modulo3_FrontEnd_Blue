/**4. Faça uma página HTML com um elemento input e um botão para adicionar. Ao escrever algo no input
e clicar em adicionar. Sua página HTML deve receber tal item. Pense em uma lista de compras. Você
também deve ser capaz de remover a lista toda ou um item da lista.*/

const elementoBotao = document.getElementById("botao")
const elementoApagar = document.getElementById("botao_apagar")
const elementoLine = document.querySelector(".line")
const elementoNome = document.getElementById("nome")

elementoBotao.addEventListener('click', function(e){
    elementoLine.append (` ${elementoNome.value} ---`)
})

elementoApagar.addEventListener('click', function(e){
    elementoLine.innerHTML = ""
})