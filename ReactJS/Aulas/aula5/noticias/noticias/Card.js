// defini a classe card
class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.lista = document.getElementById("lista")
  }

  // monta o HTML do card com os dados do JSON
  mostraNoticia(dados) {
    // cria uma variavel que ira armazenar todo esse HTML
    let card = ''
    // faz o loop no array dados que armazena as noticias
    dados.noticias.map(function (elemento) {
      console.log("elemento", elemento)
      // adiciona a variavel card todo o HTML com as informações
      // += serve para adicionar sem sobrescrever
      card += `
      <div class="card">
        <h2>${elemento.titulo}</h2>
        <p>${elemento.chamada}</p>
        <a href="${elemento.link}" target="_blank">Link para a noticia</a>
      </div>
      `
    });

    this.lista.innerHTML = card
  }
}
