
function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigada por Clicar :)</b>"; 
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obirgada por contribuir"); 
}

function redirecionar(){
    window.open("https://www.sistemas.pucminas.br/sco/SilverStream/Pages/pgALN_AreaNoticia.html");
    window.location.href= "https://www.udemy.com/cart/success/535762158/"; 
}

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigada por passar o mouse"; 
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui"; 
}

var lista = ["maça", "pêra", "laranja"];
lista.push ("melancia");
lista.pop (); 
console.log(lista);

console.log (lista);
console.log (lista.toString());
console.log (lista.join(" ° "));


function soma (n1, n2){
    return n1 + n2;
}

alert (soma(9, 333)); 


function setReplace (frase, nome, novo_nome){
    return frase.replace (nome, novo_nome)
}

alert (setReplace("Lorena é linda", "linda","gostosa"));


function validaIdade (idade){
    var validar; 
    if (idade >=18){
        validar= true
    }

    else {
        validar= false
    }
    return validar; 
}

var idade= prompt("Qual sua idade?"); 
console.log (validaIdade(idade)); 


//Condicionais
var idade= prompt("Qual sua idade?");
	if (idade >=18){
	alert("você é maior de idade!")
	}
	else{
	alert("você é menor de idade!")
};


var count = 0;
while (count <=5){
 console.log(count);
alert(count);
count ++
};



//Dicionario exemplos s2
var frutas = [{nome:"uva", cor:"roxa"}, {nome:"pitaya", cor:"rosa"},];
console.log(frutas);
alert(frutas [1].cor);

var fruta = {nome: "uva", cor:"roxa"};
console.log(fruta.cor);
console.log (fruta);
alert(fruta.nome);



//Array exemplos :)
var nome="Lorena Andrade";
var idade= 27;
var idade2 = 10;
var frase = "Naruto é o melhor anime do mundo s2"; 
alert(nome + " tem " + idade + " anos");
alert(idade + idade2)
console.log(nome);
console.log(idade+idade2); 
console.log(frase.toLowerCase());
alert(frase.replace("Naruto", "Black Clover"));