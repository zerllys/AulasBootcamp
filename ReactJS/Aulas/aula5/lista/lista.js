class Lista {
  constructor() {
    this.inputItem = document.querySelector("#item")
    this.botaoAdicionar = document.querySelector("#adicionar")
    this.lista = document.querySelector("#lista")
    this.botaoApagar = document.querySelector("#apagar")
  }

  apagarLista() {

    this.lista.innerHTML = ''
  }


  adicionarNaLista(minhaLista) {
    let listaHTML = ''

    minhaLista.map((conteudo) => {

      listaHTML += `
      <div class="listaHTML">
        <li> ${conteudo}
        </li>
      </div>
      
      `
    })

    this.lista.innerHTML = listaHTML
  }

}

