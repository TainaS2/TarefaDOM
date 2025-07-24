const notas = [];

const input = document.getElementById('inp');
const btnA = document.getElementById('btn-a');
const btnC = document.getElementById('btn-c');
const pronto = document.getElementById('pronto');
const area = document.getElementById('area');

function notasArea(){
    area.value = notas.map((nota,i) => 'A nota ' + (i + 1) + ' é: ' + nota).join('\n'); 
}

btnA.onclick = function() {
    const valor = Number(input.value.replace(',', '.'));
    if(isNaN(valor) || (valor < 0 || valor > 10)){
        alert('A nota digitada é inválida!,por favor, insira uma nota válida.');
        input.value = '';
        return;
    }else if(input.value === '') {
        alert('Por favor, insira uma nota.');
        return;
    }else{
        notas.push(valor);
        input.value = '';
        notasArea();
    }
}

btnC.onclick = function() {
    if(notas.length === 0) {
        alert('Não há notas para calcular a média.');
        return;
    }
    let soma = 0;
    for(let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    const media = soma / notas.length;
    pronto.innerHTML =`Média: ${media.toFixed(2)}`;
    input.value = '';
    notas.length = 0;
    notasArea();
}
