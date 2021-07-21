/*2. Faça uma página HTML onde é possível adicionar o nome, idade e telefone por meio de inputs
elements e renderizar os elementos informados em uma div na mesma página com um elemento h1
escrito: "Listar clientes". Você pode adicionar diversos clientes.*/

const elementoBotao = document.getElementById("botao")
const display = document.getElementById("display-screen")
const elementoNome = document.getElementById("nome")

function limparVisor(){
    if(display.value != 0) {
        display.value = "";
    }
}

elementoBotao.addEventListener('click', function(){
    limparVisor()
    let nome_inverso = elementoNome.value.split('').reverse().join('')
    display.value += nome_inverso
})