function getRandomNumber(min, max, inclusive = false) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const range = inclusive ? max - min + 1 : max - min;
    return Math.floor(Math.random() * range) + min;
}

// Exemplo de uso:
const numeroAleatorio = getRandomNumber(1, 10); // Gera um número entre 1 e 10 (exclusivo)
console.log(numeroAleatorio);