
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>tks</b>";
   // alert("obrigada por clicar");
}


function redirecionar(){
    window.open("https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d");//abre em outra aba
    window.location.href = "https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d";//abre na mesma janela

}

function trocar(){
    document.getElementById("mousemove").innerHTML = "<b>passou</b>";
    //alert("trocar texto");
}


function voltar(){
    document.getElementById("mousemove").innerHTML = "<b>voltou</b>";
    //alert("trocar texto");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade= prompt("Qual sua idade?");
console.log(validaIdade(idade));



function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));

function setReplace(frase,nome,novo_nome){
  return  frase.replace(nome, novo_nome)
}
alert (setReplace("Vai Japão","Japão","Brasil"));


var d=new Date;
alert(d);//data completa
alert(d.getMonth()+1);//mostra o mes
alert(d.getDate());
alert(d.getMinutes());


/*
var count;
for(count=1;count<=5;count++){
    alert(count);
};


estrutura de repetição
var count = 5;
while(count<5){
    console.log(count);
    count++;
};


 laços condicionais
var idade=prompt ("Qual sua idade?");
if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};



lista de dicionário
var frutas=[{nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);


 Dicionário
var fruta={nome:"maçã",cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);



var lista = ["maçã","pêra","laranja"];
lista.push("uva");//acrescenta item na lista
lista.pop("laranja");//exclui item na lista
console.log(lista[0]);//mostra o primeiro valor da lista
console.log(lista.length);//quantidade de itens na lista
console.log (lista.reverse());//mostra a lista ao contrário da lista
console.log (lista.toString());//mostra os itens fora da lista transformando em string
console.log (lista.join(" - "));//substitui a virgula que separa os itens por um "-"


var nome = " Zerli ";
var n1 = 29;
var n2 = 10;
var frase = "Japão é o melhor time"

alert ("Bem vindo" + nome);//caixa de diálogo
console.log(n1 + n2);//aparece na caixa de inspeção de elemento
console.log(frase.toUpperCase());//toLowerCase letras em minúsculo
alert(frase.replace("Japão","Brasil")); //substitui a palavra*/