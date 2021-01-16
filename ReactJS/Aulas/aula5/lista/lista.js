class Lista {
  constructor() {
    this.inputItem = document.querySelector("#item")
    this.botaoAdicionar = document.querySelector("#adicionar")
    this.lista = document.querySelector("#lista")
    this.botaoApagar = document.querySelector("#apagar")
  }

  apagarLista() {
    // implementar apagar do html
  }

  adicionarNaLista(minhaLista) {
    let listaHTML = ''
    minhaLista.inputItem.map(function(retorno){

      listaHTML += `
      
      
      `
    })


    // loop

    this.lista.innerHTML = listaHTML
  }

}

