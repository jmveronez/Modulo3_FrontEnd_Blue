/**5. Faça uma página HTML onde você informa quatro notas diferentes para as disciplinas de Matemática,
Português, Geografia e Biologia. Após informar todas as notas, mostrar na tela o boletim completo
com as notas informadas e a média. */

const elementoBotao = document.getElementById("botao")
const matematica = document.getElementById("matematica")
const portugues = document.getElementById("portugues")
const historia = document.getElementById("historia")
const geografia = document.getElementById("geografia")
const matematicaValue = document.querySelector(".matematica")
const portuguesValue = document.querySelector(".portugues")
const historiaValue = document.querySelector(".historia")
const geografiaValue = document.querySelector(".geografia")
const mediaValue = document.querySelector(".media")


elementoBotao.addEventListener('click', function(e){
    matematicaValue.innerHTML = `<p>Matemática: ${matematica.value}</p>`
    portuguesValue.innerHTML = `<p>Português: ${portugues.value}</p>`
    historiaValue.innerHTML = `<p>História: ${historia.value}</p>`
    geografiaValue.innerHTML = `<p>Geografia: ${geografia.value}</p>`
    let soma = Number(matematica.value) + Number(portugues.value) + Number(historia.value) + Number(geografia.value)
    let media = soma / 4
    mediaValue.innerHTML = `A média deste aluno foi: ${media}`
})