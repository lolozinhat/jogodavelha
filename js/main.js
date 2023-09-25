//Declaração de Variáveis para os Elementos do Jogo
let letra = "X"; // X ou O

function joga(casa) {
    let celulaClicada = document.getElementById(casa).innerHTML;

    if(celulaClicada == 'X'|| celulaClicada == 'O'){
        alert('Esta cédula já tem um valor!');
    } else {
        document.getElementById(casa).innerHTML = letra;
        if(letra == 'X'){
            letra= 'O';
        } else {
            letra = 'X';
        }
    }

}