function calcularMedia(nota1, nota2, nota3) {
    const somaNotas = nota1 + nota2 + nota3;
    const media = somaNotas / 3;
    return media;
}

// Exemplo de uso:
const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.5;

const mediaFinal = calcularMedia(nota1, nota2, nota3);
console.log(`A média das três notas é: ${mediaFinal.toFixed(2)}`);