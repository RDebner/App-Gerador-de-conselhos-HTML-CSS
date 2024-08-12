const textoConselho = document.getElementById('text') 
const idConselho = document.getElementById('idConselho')
const botao = document.getElementById('button')

async function gerarConselho () {
    const url = "https://api.adviceslip.com/advice"
    const conselho = await fetch(url)
    return await conselho.json()
}

async function mensagemConselho () {
    const conselho = await gerarConselho()
    const mensagem = conselho.slip.advice
    return mensagem
}

async function idDoConselho () {
    const conselho = await gerarConselho()
    const id = conselho.slip.id
    return id
}


botao.addEventListener('click' , async function exibirConselho () {
    idConselho.innerText = await idDoConselho()
    textoConselho.innerText = await mensagemConselho()
} )

setTimeout(async () => {
    idConselho.innerText = await idDoConselho()
    textoConselho.innerText = await mensagemConselho()
}, 0);






