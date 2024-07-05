// Objeto que representa uma pessoa
const pessoa = {
    nome: "João",
    peso: 70, // em Kg
    altura: 1.78 // em metros
};

// Função para calcular o IMC
function calcularIMC(pessoa) {
    const { peso, altura } = pessoa;
    const imc = peso / (altura * altura);
    return imc;
}

// Chamar a função e obter o IMC
const imcDaPessoa = calcularIMC(pessoa);

// Exibir o resultado
console.log(`O IMC de ${pessoa.nome} é ${imcDaPessoa.toFixed(2)}.`);

// Classificar o IMC
if (imcDaPessoa < 18.5) {
    console.log("Abaixo do peso.");
} else if (imcDaPessoa < 24.9) {
    console.log("Peso saudável.");
} else if (imcDaPessoa < 29.9) {
    console.log("Sobrepeso.");
} else {
    console.log("Obesidade.");
}