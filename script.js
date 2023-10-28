
function addPost () {
   
    // pega o valor do campo do input
    let campoNome = document.getElementById('inputContatoNome').value
    let campoDescricao = document.getElementById('inputContatoTituloDescricao').value

    // limpa o campo do input
    document.getElementById('inputContatoNome').value = ''
    document.getElementById('inputContatoTituloDescricao').value = ''

    // funçao que cria a nova div
    function criarDiv (nome, conteudo) {
        
        // cria a div e adiciona nela o valor do campo dentro do Paragrafo
        let divNova = document.createElement('div')
        divNova.innerHTML =   
        
        '<h3>' + nome + '</h3>' +
        '<p class="pContato">' + conteudo + '</p>'

        // pega a div "socorro" e adiciona a div nova dentro dela
        const divPai = document.getElementById('divsocorro')
        divPai.appendChild(divNova)
    }

    // executa a função
    criarDiv (campoNome, campoDescricao)

}

const audioDiv = document.querySelector('.audio')
const musica = new Audio('audios/musicacut.mp3')

audioDiv.appendChild(musica)

const play = () => {
    musica.play()
      
}
 // Define o tempo de execução do áudio (em milissegundos)
 const tempoExecucao = 500; // 5 segundos, por exemplo

 // Agenda a interrupção do áudio após o tempo de execução
 setTimeout(() => {
     musica.pause()
 }, tempoExecucao)

