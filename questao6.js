function calcularSomaReduce(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

const numeros = [10, 20, 30, 40, 50];
const resultado = calcularSomaReduce(numeros);
console.log("A soma dos números é:", resultado);