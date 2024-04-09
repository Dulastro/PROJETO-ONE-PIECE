const botoes = document.querySelectorAll('.botao')

botoes.forEach((botao, i) => {
    botao.addEventListener('click', () => {

        desselecionarBotao()
        selecionarPersonagem()

        botao.classList.add('selecionado')
        const personagens = document.querySelectorAll('.personagem')
        personagens[i].classList.add('selecionado')


    })

})

function selecionarPersonagem() {
    personagemSelecionado = document.querySelector('.personagem.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

function desselecionarBotao() {
    const botaoSelecinado = document.querySelector('.botao.selecionado')
    botaoSelecinado.classList.remove('selecionado')
}
