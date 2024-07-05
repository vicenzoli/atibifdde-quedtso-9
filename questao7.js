function contarPalavrasUnicas(frase) {
    // Remove pontuação e converte para minúsculas
    const palavras = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');

    // Cria um objeto para rastrear as palavras únicas
    const contador = {};

    // Conta as ocorrências de cada palavra
    for (const palavra of palavras) {
        contador[palavra] = (contador[palavra] || 0) + 1;
    }

    // Filtra as palavras únicas (ocorrência = 1)
    const palavrasUnicas = Object.keys(contador).filter(palavra => contador[palavra] === 1);

    return palavrasUnicas.length;
}

const fraseExemplo = "Esta é uma frase de exemplo com algumas palavras repetidas. Algumas palavras são únicas.";
const resultado = contarPalavrasUnicas(fraseExemplo);
console.log(`Número de palavras únicas: ${resultado}`);