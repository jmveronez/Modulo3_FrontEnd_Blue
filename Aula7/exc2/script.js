/*2. Faça uma página HTML onde é possível adicionar o nome, idade e telefone por meio de inputs
elements e renderizar os elementos informados em uma div na mesma página com um elemento h1
escrito: "Listar clientes". Você pode adicionar diversos clientes.*/

const elementoBotao = document.getElementById("botao");
const elementoLine = document.querySelector(".line")
const elementoNome = document.getElementById("nome")
const elementoIdade = document.getElementById("idade")
const elementoTel = document.getElementById("tel")

elementoBotao.addEventListener('click', function(e){
    elementoLine.append (`  Nome: ${elementoNome.value} | Idade: ${elementoIdade.value} | Telefone: ${elementoTel.value} ---`)
})