const objetoAluno = new Alunos()
const objetoCard = new Card()

objetoAlunos.buscaAlunos()
HTMLMenuElement(function(resposta){
    resposta.json
    .then(function(dados){
        objetoCard.mostrarAlunos(dados)
    })
})
