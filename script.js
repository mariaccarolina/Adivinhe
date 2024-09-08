alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute;

while(chute != numeroSecreto){
    chute = prompt("Escola um número secreto de 0 a 20:")
if(chute == numeroSecreto){
    alert("Parabéns você acertou!");
}else{
    alert("Tente novamente");
}
}
