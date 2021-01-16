class Card{
    constructor(){
        this.alunos=document.querySelector("#alunos")
    }

    mostrarAlunos(dados){
        console.log(dados)

        let card =''
        dados.alunos.map(function(aluno){

            card += `
            <div>
            <h2>${aluno.name}</h2>
            <p>chamada: ${aluno.id}</p>
            
            `;

        })

        this.alunos.innerHTML = card
    }
}