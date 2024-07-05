JavaScript

function contarPalavrasUnicas(frase) {
    const palavras = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');
    const contador = {};
    for (const palavra of palavras) {
        contador[palavra] = (contador[palavra] || 0) + 1;
    }
    const palavrasUnicas = Object.keys(contador).filter(palavra => contador[palavra] === 1);
    return palavrasUnicas.length;
}

function criarDespesa(descricao, valor, data) {
    return {
        descricao,
        valor,
        data
    };
}

function contarLetra(frase, letra) {
    let quantidade = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            quantidade++;
        }
    }
    return quantidade;
}

const fraseExemplo = "O homem é o lobo do homem";
const letraProcurada = "o";

const resultadoPalavrasUnicas = contarPalavrasUnicas(fraseExemplo);
console.log(`Número de palavras únicas: ${resultadoPalavrasUnicas}`);

const despesaExemplo = criarDespesa("Almoço no restaurante", 25.50, "2024-07-05");
console.log("Exemplo de despesa:", despesaExemplo);

const resultadoContagemLetra = contarLetra(fraseExemplo, letraProcurada);
console.log(`A letra "${letraProcurada}" aparece ${resultadoContagemLetra} vezes na frase.`);