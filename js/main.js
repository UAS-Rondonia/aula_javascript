/*
var lista = ["maça","pêra","laranja"]
//lista.push("uva");
//lista.pop();
*/

/*
console.log(lista);
console.log(lista.toString)[0]; //transforma em string
consoje.log(lista.join(" - ")); //tem como definir espaço diferente de ,(vírgula)
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*
var count;
for(count=0; count <=5; count++){     //função for
    alert(count);
}
*/

/*
var d = new Date();
alert(d.getUTCDate());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
function soma (n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(soma(5, 10));
alert(setReplace("Vaí Japão", "Japão", "Brasil"));
*/
//-------------------------------------elementos da página ------------------
/*
function clicou(){
    alert("Obrigado por clicar!!")
}
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<i><b>Obrigado por clicar!!</b></i>"
}

function redirecionar(){
    window.open("https://www.google.com.br");
   // window.location.href = "https://www.google.com.br"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove2").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}